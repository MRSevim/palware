import React from "react";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-2xl p-3 bg-(--background) rounded cursor-pointer hover:bg-(--hovered-background) hover:scale-110">
      {children}
    </button>
  );
};

export default PrimaryButton;
