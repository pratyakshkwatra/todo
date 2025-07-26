"use client";

import { Todo } from "../models/todo";
import { deleteTodosAction, editTodoAction } from "../actions/todoActions";
import { Calendar, Pencil, X } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ListTile({ todo }: { todo: Todo }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="rounded-lg px-4 py-2 bg-neutral-100 flex justify-between mb-4 items-center"
    >
      <div>
        <div className="flex items-center justify-center gap-2">
          <Calendar size={18} style={{ color: "#a1a1a1" }}></Calendar>
          <p className="font-medium text-neutral-400">
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "short",
              timeStyle: "medium",
            }).format(todo.createdAt)}
          </p>
        </div>
        <p className="font-bold text-xl">
          {todo.title == "Test" ? "" : todo.title}
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Pencil
          size={24}
          onClick={async () => router.push(`/edit_todo?id=${todo.id}&prevTitle=${todo.title}`)}
        ></Pencil>
        <X
          size={30}
          onClick={async () => await deleteTodosAction({ id: todo.id })}
        ></X>
      </div>
    </motion.div>
  );
}
