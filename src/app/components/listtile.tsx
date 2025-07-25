"use client"

import { X } from "@deemlol/next-icons";
import { Todo } from "../../models/todo";
import { deleteTodosAction } from "../actions/todoActions";
import { Calendar } from "lucide-react";

export default function ListTile({ todo }: { todo: Todo }) {
  return (
    <div className="rounded-lg px-4 py-2 bg-neutral-100 flex justify-between mb-4 items-center">
      <div>
        <div className="flex items-center justify-center gap-2">
          <Calendar size={18} style={{ color: '#a1a1a1' }}></Calendar>
          <p className="font-medium text-neutral-400">{todo.createdAt.toLocaleString()}</p>
        </div>
        <p className="font-bold text-xl">{todo.title == "Test" ? "" : todo.title}</p>
      </div>
      <X
        onClick={async () => await deleteTodosAction({ index: todo.index })}
      ></X>
    </div>
  );
}
