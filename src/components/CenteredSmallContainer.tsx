import React from "react";

const CenteredSmallContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-full max-w-lg mx-auto bg-slate p-4">{children}</div>;
};

export default CenteredSmallContainer;
