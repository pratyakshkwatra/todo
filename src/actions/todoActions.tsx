"use server";

import { db } from "@/db/db";
import { todosTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getTodosAction() {
  const user = await auth();

  if (user != null) {
    if (user.isAuthenticated) {
      return await db
        .select()
        .from(todosTable)
        .where(eq(todosTable.clerkUserID, user.userId))
        .orderBy(todosTable.createdAt);
    }
  }
  return [];
}

export async function addTodoAction(title: string) {
  const user = await auth.protect();
  await db.insert(todosTable).values({ title, clerkUserID: user.userId });
  redirect("/");
}

export async function editTodoAction(id: number, title: string) {
  const user = await auth.protect();
  await db
    .update(todosTable)
    .set({ title })
    .where(and(eq(todosTable.id, id), eq(todosTable.clerkUserID, user.userId)));
  redirect("/");
}

export async function deleteTodosAction({ id }: { id: number }) {
  const user = await auth.protect();
  await db
    .delete(todosTable)
    .where(and(eq(todosTable.id, id), eq(todosTable.clerkUserID, user.userId)));
  revalidatePath("/");
}
