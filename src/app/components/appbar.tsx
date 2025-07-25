"use client";

import { Plus } from "@deemlol/next-icons";
import { motion } from "motion/react"
import { addTodoAction } from "../actions/todoActions";

export default function AppBar() {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl flex justify-between">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="text-white text-xl font-bold">Todo List</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}><Plus className="text-white" onClick={() => addTodoAction("abc")}></Plus></motion.div>
    </div>
  );
}
