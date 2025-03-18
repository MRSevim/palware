"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WideButton from "../WideButton";

const Adopt = () => {
  const [translateX, setTranslateX] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const inhabitants = [
    { name: "Rex", imageSrc: "/images/rex.jpg" },
    { name: "Winnie", imageSrc: "/images/winnie.jpg" },
    { name: "Fin", imageSrc: "/images/fin.jpg" },
    { name: "Rex", imageSrc: "/images/rex.jpg" },
    { name: "Winnie", imageSrc: "/images/winnie.jpg" },
    { name: "Fin", imageSrc: "/images/fin.jpg" },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxTranslate = (inhabitants.length / itemsPerView - 1) * 100;

  const handleNext = () => {
    if (translateX < maxTranslate) {
      setTranslateX((prev) => prev + 100);
    }
  };

  const handlePrev = () => {
    if (translateX > 0) {
      setTranslateX((prev) => prev - 100);
    }
  };

  return (
    <div className="my-25">
      <h1 className="font-bold text-3xl">
        Here are some of the available inhabitant
      </h1>
      <div className="relative overflow-hidden">
        {translateX > 0 && (
          <button
            className="absolute left-0 top-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
            onClick={handlePrev}
          >
            <Icon type="chevron-left" />
          </button>
        )}

        <div
          className="flex transition-transform duration-300 "
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {inhabitants.map((inhabitant, index) => (
            <Inhabitant key={index} {...inhabitant} />
          ))}
        </div>

        {translateX < maxTranslate && (
          <button
            className="absolute right-0 top-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
            onClick={handleNext}
          >
            <Icon type="chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
};

const Inhabitant = ({ name, imageSrc }: { name: string; imageSrc: string }) => {
  return (
    <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 p-2">
      <div className="flex flex-col items-center p-3 bg-slate">
        <Image
          src={imageSrc}
          width={372}
          height={249}
          alt={name + "'s image"}
        ></Image>
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
