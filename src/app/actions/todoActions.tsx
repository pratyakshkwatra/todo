"use server";

import { revalidatePath } from "next/cache";
import { TodoService } from "../services/todoService";

const todoService: TodoService = new TodoService();

export async function addTodoAction(title: string) {
  todoService.addTodo({ title });
  revalidatePath("/");
}

export async function getTodosAction() {
  return todoService.getTodos();
}

export async function deleteTodosAction({ index }: { index: number }) {
  todoService.deleteTodos({ index: index });
  revalidatePath("/");
}
