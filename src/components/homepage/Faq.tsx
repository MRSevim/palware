"use client";
import React, { useEffect, useRef, useState } from "react";

const Faq = () => {
  const [active, setActive] = useState<string>("");
  return (
    <div className="my-25">
      <div className="w-full bg-slate p-4">
        <h3 className="font-semibold text-xl text-center">
          Some Questions You Might Ask
        </h3>
        <Question id="1" active={active} setActive={setActive} />
        <Question id="2" active={active} setActive={setActive} />
        <Question id="3" active={active} setActive={setActive} />
      </div>
    </div>
  );
};

const Question = ({
  id,
  active,
  setActive,
}: {
  id: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const expanded = active === id;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive((prev) => (prev === id ? "" : id));
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = expanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [expanded]);

  return (
    <>
      <button
        className={`p-4 my-2 flex items-center justify-between w-full bg-(--background) rounded-lg cursor-pointer ${
          expanded ? "border border-gray-800" : ""
        }`}
        onClick={handleClick}
      >
        Question Header
        <i
          className={`fa-solid ${
            expanded ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ height: "0px" }}
      >
        <div className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          molestias tempore omnis! Iure, ex, molestiae alias nam incidunt
          molestias reiciendis fugit quis amet delectus quibusdam. Delectus
          architecto commodi corrupti reprehenderit.
        </div>
      </div>
    </>
  );
};

export default Faq;
