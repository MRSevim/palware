import React from "react";

const Alert = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => {
  const str =
    type === "success"
      ? "text-green-800 bg-green-100"
      : type === "error"
      ? "text-red-800  bg-red-200"
      : "";

  return (
    <div className={"p-2 text-sm rounded-lg " + str} role="alert">
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alert;
