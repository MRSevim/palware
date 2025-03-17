"use server";
import { z } from "zod";
import { delay } from "@/helpers";

const schema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
});

export const subscribeAction = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
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
