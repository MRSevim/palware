"use server";
import { z } from "zod";
import { delay } from "@/helpers";

const subscribeSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
});

export const subscribeAction = async (formData: FormData) => {
  const validatedFields = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  // Return error if the form data is invalid
  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.flatten().fieldErrors.email?.[0] ||
        "Validation error",
      successMessage: "",
    };
  }
  // Wait for 400ms before returning success
  await delay(400);

  return {
    error: "",
    successMessage: "Wow, This did nothing",
  };
};

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const contactFormAction = async (formData: FormData) => {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Return error if the form data is invalid
  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError =
      Object.values(errorMessages).flat()[0] || "Validation error";

    return {
      error: firstError,
      successMessage: "",
    };
  }
  // Wait for 400ms before returning success
  await delay(400);

  return {
    error: "",
    successMessage: "Wow, This did nothing",
  };
};
