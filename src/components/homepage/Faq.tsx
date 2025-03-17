"use client";
import React, { useState } from "react";
import CenteredSmallContainer from "../CenteredSmallContainer";

const Faq = () => {
  return (
    <div className="my-25">
      <CenteredSmallContainer>
        <h3 className="font-semibold text-xl text-center">
          Some Questions You Might Ask
        </h3>
        <Question />
        <Question />
        <Question />
      </CenteredSmallContainer>
    </div>
  );
};
const Question = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <button
        className={
          "p-4 my-2 flex items-center justify-between w-full bg-(--background) rounded-lg cursor-pointer " +
          (expanded && "border border-text")
        }
        onClick={() => setExpanded(!expanded)}
      >
        Question Header
        <i
          className={`fa-solid ${
            expanded ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>
      </button>
      {expanded && (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          molestias tempore omnis! Iure, ex, molestiae alias nam incidunt
          molestias reiciendis fugit quis amet delectus quibusdam. Delectus
          architecto commodi corrupti reprehenderit.
        </>
      )}
    </>
  );
};

export default Faq;
