"use client";

import ListTile from "./listtile";
import { Todo } from "../models/todo";
import { AnimatePresence, motion } from "motion/react";

export default function Body({ items }: { items: Array<Todo> }) {
  return items.length !== 0 ? (
    <div className="mt-4 flex-1 flex flex-col">
      <AnimatePresence>
        {items.map((item) => (
          <ListTile todo={item} key={item.id}></ListTile>
        ))}
      </AnimatePresence>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-full flex flex-col items-center justify-center"
    >
      <p className="text-center text-neutral-900 font-bold text-3xl">
        No todos available
      </p>
      <p className="text-center text-neutral-400">
        Click the plus icon to add a todo
      </p>
    </motion.div>
  );
}
