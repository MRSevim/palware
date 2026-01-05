"use client";
import React, { useActionState } from "react";
import Alert from "../Alert";
import { contactFormAction } from "@/actions/actions";

export type InitialContactState = {
  errors: { name: string; email: string; message: string };
  successMessage: string;
  inputs?: {
    name: string;
    email: string;
    message: string;
  };
};

const initialFormState: InitialContactState = {
  errors: { name: "", email: "", message: "" },
  successMessage: "",
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    contactFormAction,
    initialFormState
  );

  return (
    <form
      action={formAction}
      className="flex w-full max-w-lg mt-10 lg:mt-0 lg:ms-15 flex-col gap-4 p-6 bg-light-gray rounded-lg shadow-lg"
    >
      <h1 className="font-bold text-lg">Contact us</h1>
      <input
        type="text"
        name="name"
        defaultValue={state.inputs?.name}
        placeholder="Enter name"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
      />
      {state.errors.name && <Alert type="error" message={state.errors.name} />}
      <input
        type="email"
        name="email"
        defaultValue={state.inputs?.email}
        placeholder="Enter email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
      />
      {state.errors.email && (
        <Alert type="error" message={state.errors.email} />
      )}
      <textarea
        name="message"
        placeholder="Enter message"
        defaultValue={state.inputs?.message}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
      />
      {state.errors.message && (
        <Alert type="error" message={state.errors.message} />
      )}
      <button
        type="submit"
        disabled={isPending}
        className={`p-3 rounded-lg color-(--foreground) cursor-pointer transition-colors ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-(--background) hover:bg-(--hovered-background)"
        }`}
      >
        Submit
      </button>
      {state.successMessage && (
        <Alert type="success" message={state.successMessage} />
      )}
    </form>
  );
};

export default ContactForm;
