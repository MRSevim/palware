"use server";
import { z } from "zod";
import { delay } from "@/helpers";
import { InitialContactState } from "@/components/contact/ContactForm";
import { InitialSubscribeState } from "@/components/Subscribe";

const subscribeSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
});

export const subscribeAction = async (
  _initialFormState: InitialSubscribeState,
  formData: FormData
) => {
  const email = formData.get("email") as string;

  const validatedFields = subscribeSchema.safeParse({
    email,
  });

  // Return error if the form data is invalid
  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.flatten().fieldErrors.email?.[0] ||
        "Validation error",
      successMessage: "",
      inputs: { email },
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

export const contactFormAction = async (
  _initialFormState: InitialContactState,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  const validatedFields = contactSchema.safeParse(rawData);

  // Return error if the form data is invalid
  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        name: errorMessages.name ? errorMessages.name[0] : "",
        email: errorMessages.email ? errorMessages.email[0] : "",
        message: errorMessages.message ? errorMessages.message[0] : "",
      },
      successMessage: "",
      inputs: rawData,
    };
  }
  // Wait for 400ms before returning success
  await delay(400);

  return {
    errors: { name: "", message: "", email: "" },
    successMessage: "Wow, This did nothing",
  };
};
