import React from "react";

const WideButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="cursor-pointer px-2 py-3 my-4 bg-(--foreground) hover:bg-zinc-900 focus:outline-2 focus:outline-offset-1 focus:outline-(--background) active:bg-zinc-950
 text-white w-full rounded"
    >
      {" "}
      {children}
    </button>
  );
};

export default WideButton;
