"use client";

import { subscribeAction } from "@/actions/actions";
import { useActionState } from "react";
import Alert from "./Alert";

export type InitialSubscribeState = {
  error: string;
  successMessage: string;
  inputs?: { email: string };
};

const initialFormState: InitialSubscribeState = {
  error: "",
  successMessage: "",
};

const Subscribe = () => {
  const [state, action, isPending] = useActionState(
    subscribeAction,
    initialFormState
  );

  return (
    <form
      action={action}
      className="flex flex-col gap-4 p-6 bg-light-gray rounded-lg shadow-lg"
    >
      <input
        type="email"
        name="email"
        defaultValue={state.inputs?.email}
        placeholder="Enter email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className={`p-3 rounded-lg color-(--foreground) cursor-pointer transition-colors ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-(--background) hover:bg-(--hovered-background)"
        }`}
      >
        Subscribe to Newsletter
      </button>
      {state.error && <Alert type="error" message={state.error} />}
      {state.successMessage && (
        <Alert type="success" message={state.successMessage} />
      )}
    </form>
  );
};

export default Subscribe;
