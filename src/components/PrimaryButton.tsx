import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="text-2xl px-5 py-3 bg-(--background) rounded cursor-pointer hover:bg-(--hovered-background) hover:scale-110 focus:outline-2 focus:outline-(--foreground)"
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
