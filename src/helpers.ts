// Helper function to delay execution
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const LinkClassName = "cursor-pointer hover:underline";

export const initialFormState = {
  error: "",
  successMessage: "",
};

export const getCapitalizedTextFromRoute = (val: string) => {
  return String(val).charAt(1).toUpperCase() + String(val).slice(2);
};
