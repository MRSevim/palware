import React from "react";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-2xl px-5 py-3 bg-(--background) rounded cursor-pointer hover:bg-(--hovered-background) hover:scale-110">
      {children}
    </button>
  );
};

export default PrimaryButton;
