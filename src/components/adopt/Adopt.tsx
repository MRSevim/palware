"use client";
import Image from "next/image";
import React, { useRef } from "react";
import WideButton from "../WideButton";

const inhabitants = [
  { name: "Rex", imageSrc: "/images/rex.jpg" },
  { name: "Winnie", imageSrc: "/images/winnie.jpg" },
  { name: "Fin", imageSrc: "/images/fin.jpg" },
  { name: "Rex", imageSrc: "/images/rex.jpg" },
  { name: "Winnie", imageSrc: "/images/winnie.jpg" },
  { name: "Fin", imageSrc: "/images/fin.jpg" },
];

const Adopt = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollClick = (dir: "left" | "right") => {
    if (!containerRef.current || !scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        dir === "left"
          ? -containerRef.current.clientWidth
          : containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-25">
      <h1 className="font-bold text-3xl mb-5">
        Here are some of the available inhabitant
      </h1>

      <div className="relative" ref={containerRef}>
        <button
          className="absolute left-0 top-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
          onClick={() => handleScrollClick("left")}
        >
          <Icon type="chevron-left" />
          <p className="sr-only">Go left on carousel</p>
        </button>

        <div
          className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
          ref={scrollRef}
        >
          {inhabitants.map((inhabitant, index) => (
            <Inhabitant key={index} {...inhabitant} />
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
          onClick={() => handleScrollClick("right")}
        >
          <Icon type="chevron-right" />{" "}
          <p className="sr-only">Go right on carousel</p>
        </button>
      </div>
    </div>
  );
};

const Inhabitant = ({ name, imageSrc }: { name: string; imageSrc: string }) => {
  return (
    <div className="flex-[0_0_auto] snap-start w-full md:w-1/2 lg:w-1/3 p-2 ">
      <div className="flex flex-col items-center p-3 bg-slate">
        <Image src={imageSrc} width={372} height={249} alt={name}></Image>
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          neque magni? Laborum labore sequi esse error quasi quidem officiis
          saepe.
        </p>
        <WideButton>Adopt</WideButton>
      </div>
    </div>
  );
};

const Icon = ({ type }: { type: string }) => {
  return <i className={`fa-solid fa-${type} text-xl`}></i>;
};

export default Adopt;
