"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function AppBar({ showTrailing }: { showTrailing: boolean }) {
  const router = useRouter();

  return (
    <div className="bg-neutral-900 p-4 rounded-xl flex justify-between items-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
        className="text-white text-xl font-bold"
      >
        Todo App
      </motion.p>
      <motion.div
        className="flex gap-4 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ cursor: "pointer" }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <SignedOut>
          <SignInButton>
            <button className="bg-white text-ceramic-white rounded-full font-medium text-sm h-8 px-2 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {showTrailing ? (
            <Plus
              className="text-white"
              onClick={() => router.push("/add_todo")}
            ></Plus>
          ) : null}
          <UserButton />
        </SignedIn>
      </motion.div>
    </div>
  );
}
