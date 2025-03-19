import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl mx-auto px-4 w-full">{children}</div>;
};

export default Container;
