import { Todo } from "../models/todo";

export class TodoService {
  private todos: Todo[] = [];
  private nextIndex = 0;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo({ title }: { title: string }) {
    const newTodo: Todo = {
      index: this.nextIndex,
      title: title,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    this.nextIndex += 1;
  }

  deleteTodos({index}: {index: number}) {
    this.todos = this.todos.filter((t) => t.index !== index);
  }
}
