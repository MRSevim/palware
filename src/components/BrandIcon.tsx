import React from "react";

const BrandIcon = ({ type }: { type: string }) => (
  <i
    className={`fa-brands fa-${type} text-2xl ms-3 hover:scale-110 cursor-pointer`}
  ></i>
);

export default BrandIcon;
