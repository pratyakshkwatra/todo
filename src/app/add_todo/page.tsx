"use client";

import { useState } from "react";
import AppBar from "@/components/appbar";
import { TextCursorInput } from "lucide-react";
import { addTodoAction } from "@/actions/todoActions";

export default function AddTodoPage() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = async () => {
    if (!title.trim()) {
      setError("Todo title cannot be empty");
      return;
    }
    setError("");
    await addTodoAction(title);
    setTitle("");
  };

  return (
    <div className="m-2 flex flex-col h-screen bg-neutral-50">
      <AppBar showTrailing={false} />
      <div className="mt-6 flex flex-col items-center justify-center flex-1 px-4">
        <div className="w-full flex flex-col gap-3">
          <label className="flex flex-col-reverse relative group">
            <input
              type="text"
              name="todo_title"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError("");
              }}
              className={`border-2 px-4 py-3 leading-9 rounded-lg outline-none ${
                error ? "border-red-500" : "border-neutral-600"
              }`}
            />
            <span
              className={`flex gap-2 justify-center items-center text-lg absolute left-4 transition-all duration-200 ${
                title
                  ? "-translate-y-18 text-lg text-neutral-600"
                  : "-translate-y-4 text-lg"
              } group-focus-within:-translate-y-18 group-focus-within:text-lg group-focus-within:text-neutral-600`}
            >
              <TextCursorInput />
              Todo Title
            </span>
          </label>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handleAddTodo}
          className="mt-4 w-full py-2 bg-neutral-900 text-white font-bold rounded-lg text-xl hover:bg-neutral-800 focus:border-neutral-800 transition duration-200"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
