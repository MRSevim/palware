import React from "react";

const Icon = ({ type }: { type: string }) => {
  return <i className={`fa-solid fa-${type} text-3xl`}></i>;
};

export default Icon;
