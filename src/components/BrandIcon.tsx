import Link from "next/link";
import React from "react";

const BrandIcon = ({ type }: { type: string }) => (
  <Link href="#">
    <i
      className={`fa-brands fa-${type} text-2xl ms-3 hover:scale-110 cursor-pointer`}
    ></i>
  </Link>
);

export default BrandIcon;
