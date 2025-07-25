"use client";

import { Plus } from "@deemlol/next-icons";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function AppBar({ showTrailing }: { showTrailing: Boolean }) {
  const router = useRouter();

  return (
    <div className="bg-neutral-900 p-4 rounded-xl flex justify-between">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
        className="text-white text-xl font-bold"
      >
        Todo App
      </motion.p>
      {showTrailing ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ cursor: "pointer" }}
          transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}
        >
          <Plus
            className="text-white"
            onClick={() => router.push("/add_todo")}
          ></Plus>
        </motion.div>
      ) : null}
    </div>
  );
}
