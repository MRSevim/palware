import React from "react";

const Container = ({
  children,
  isMain = true,
}: {
  isMain?: boolean;
  children: React.ReactNode;
}) => {
  if (isMain)
    return <main className="max-w-7xl mx-auto px-4 w-full">{children}</main>;

  return <div className="max-w-7xl mx-auto px-4 w-full">{children}</div>;
};

export default Container;
