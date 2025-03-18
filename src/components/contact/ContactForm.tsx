"use client";
import React, { useState } from "react";
import { initialFormState } from "@/helpers";
import Alert from "../Alert";
import { contactFormAction } from "@/actions/actions";

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState(initialFormState);
    const formData = new FormData(e.currentTarget);
    const state = await contactFormAction(formData);
    setState(state);
    setIsPending(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-lg mt-10 lg:mt-0 lg:ms-15 flex-col gap-4 p-6 bg-light-gray rounded-lg shadow-lg"
    >
      <h1 className="font-bold text-lg">Contact us</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        required
      />
      <textarea
        name="message"
        placeholder="Enter message"
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
        Submit
      </button>
      {state.error ? (
        <Alert type="error" message={state.error} />
      ) : state.successMessage ? (
        <Alert type="success" message={state.successMessage} />
      ) : (
        <div className="invisible p-2 text-sm">Invisible space</div>
      )}
    </form>
  );
};

export default ContactForm;
