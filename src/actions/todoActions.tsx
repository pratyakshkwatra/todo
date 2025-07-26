"use server";

import { db } from "@/db/db";
import { todosTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getTodosAction() {
  return await db.select().from(todosTable).orderBy(todosTable.createdAt);
}

export async function addTodoAction(title: string) {
  await db.insert(todosTable).values({ title });
  redirect("/");
}

export async function editTodoAction(id: number, title: string) {
  await db
    .update(todosTable)
    .set({ title: title })
    .where(eq(todosTable.id, id));
  redirect("/");
}

export async function deleteTodosAction({ id }: { id: number }) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
  revalidatePath("/");
}
