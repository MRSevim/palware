import React from "react";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const Hero = () => {
  return (
    <div className="my-25">
      <div className="flex flex-col-reverse items-center lg:flex-row gap-4 text-center">
        <div>
          <h1 className="font-bold text-5xl">
            {" "}
            Shelter For Our Habitat Partners{" "}
          </h1>
          <h2 className="text-xl my-6">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo
            excepturi accusantium harum ipsum ullam ab error animi? Iste
            eligendi eos tenetur adipisci laboriosam esse eveniet voluptatibus
          </h2>
          <div className="flex gap-2 items-center justify-center">
            <PrimaryButton>Adopt</PrimaryButton>{" "}
            <span className="font-light max-w-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <Image
          src="/images/hero-image.jpg"
          width={500}
          height={500}
          className="rounded-full"
          alt="Dog with a caregiver"
        />
      </div>
    </div>
  );
};

export default Hero;
