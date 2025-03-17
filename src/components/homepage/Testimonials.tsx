import React from "react";
import BrandIcon from "../BrandIcon";

const Testimonials = () => {
  return (
    <div className="my-25 flex flex-col lg:flex-row justify-between items-center gap-4">
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="border border-foreground rounded p-6">
      <div className="my-4">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        obcaecati quia sapiente corrupti labore facilis voluptatibus architecto
        ratione iure quaerat. Amet, placeat perspiciatis perferendis pariatur
        commodi tempore reiciendis ipsum accusantium quia aliquid, magnam
        ratione quibusdam. Sequi, nulla? Odit consequatur, aperiam modi
        inventore cumque id doloremque aliquid nisi quibusdam magni
        perferendis?"
      </div>
      <div className="flex items-center">
        <span className="size-16 rounded-full bg-zinc-300 me-4"></span> Name
        Surname
        <BrandIcon type="facebook"></BrandIcon>
        <BrandIcon type="twitter"></BrandIcon>
      </div>
    </div>
  );
};

export default Testimonials;
