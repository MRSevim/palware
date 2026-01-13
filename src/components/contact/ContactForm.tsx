"use client";
import React, { useActionState, useEffect, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (isPending) return;
    if (!formRef.current) return;

    const firstInvalid = formRef.current.querySelector(
      '[aria-invalid="true"]'
    ) as HTMLElement | null;

    firstInvalid?.focus();
  }, [formRef, isPending]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex w-full max-w-lg mt-10 lg:mt-0 lg:ms-15 flex-col gap-4 p-6 bg-light-gray rounded-lg shadow-lg"
    >
      <h1 className="font-bold text-lg">Contact us</h1>
      <div className="flex gap-1 flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          aria-invalid={!!state.errors.name}
          defaultValue={state.inputs?.name}
          placeholder="Enter name"
          aria-describedby="nameError"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        />
        {state.errors.name && (
          <Alert id="nameError" type="error" message={state.errors.name} />
        )}
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="email">Email</label>
        <input
          aria-invalid={!!state.errors.email}
          id="email"
          type="email"
          name="email"
          required
          aria-describedby="emailError"
          defaultValue={state.inputs?.email}
          placeholder="Enter email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        />
        {state.errors.email && (
          <Alert id="emailError" type="error" message={state.errors.email} />
        )}
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          aria-invalid={!!state.errors.message}
          id="message"
          name="message"
          required
          placeholder="Enter message"
          aria-describedby="messageError"
          defaultValue={state.inputs?.message}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--background) bg-white placeholder-gray-400"
        />
        {state.errors.message && (
          <Alert
            id="messageError"
            type="error"
            message={state.errors.message}
          />
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        aria-describedby="successMessage"
        className={`p-3 rounded-lg color-(--foreground) cursor-pointer transition-colors ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-(--background) hover:bg-(--hovered-background)"
        }`}
      >
        Submit
      </button>
      {state.successMessage && (
        <Alert
          id="successMessage"
          type="success"
          message={state.successMessage}
        />
      )}
    </form>
  );
};

export default ContactForm;
