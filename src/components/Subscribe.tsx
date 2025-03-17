"use client";

import { subscribeAction } from "@/actions/actions";
import { useState } from "react";
import Alert from "./Alert";

const initialState = {
  error: "",
  successMessage: "",
};

const Subscribe = () => {
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState(initialState);
    const formData = new FormData(e.currentTarget);
    const state = await subscribeAction(formData);
    setState(state);
    setIsPending(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className={`p-3 rounded-lg color-(--foreground) transition-colors ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-(--background) hover:bg-(--hovered-background)"
        }`}
      >
        Subscribe to Newsletter
      </button>
      {state.error ? (
        <Alert type="error" message={state.error} />
      ) : state.successMessage ? (
        <Alert type="success" message={state.successMessage} />
      ) : (
        <div className="invisible p-2 text-sm">123</div>
      )}
    </form>
  );
};

export default Subscribe;
