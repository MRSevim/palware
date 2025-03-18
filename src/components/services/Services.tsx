import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import WideButton from "../WideButton";

const Services = () => {
  return (
    <div className="my-25">
      <h1 className="font-bold text-3xl text-center">
        Our shelter has 3 main services
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
        <Service
          imageSrc="/images/feature-page-1.jpg"
          alt="2 garegivers with a cat on platform"
          title="Social Service "
        />
        <Service
          imageSrc="/images/feature-page-2.jpg"
          alt="2 people checking a dog out"
          title="Adoption"
        />
        <Service
          imageSrc="/images/feature-page-3.jpg"
          alt="Dogs in cages side by side"
          title="Retention"
        />
      </div>
    </div>
  );
};

const Service = ({
  imageSrc,
  alt,
  title,
}: {
  imageSrc: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center my-10 bg-light-gray rounded-lg p-3">
      <Image src={imageSrc} width={640} height={427} alt={alt}></Image>
      <h2 className="font-semibold text-lg my-5">{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        iste repellat maxime perferendis molestiae architecto nemo possimus
        voluptatem explicabo error ipsa illo, ipsum at eveniet incidunt, neque
        modi officia optio quas doloribus numquam beatae! Doloribus at sapiente
        labore soluta voluptatum eligendi ipsum dolorem inventore esse,
        molestiae temporibus animi omnis cum!
      </p>
      <WideButton>Do the Thing</WideButton>
    </div>
  );
};
export default Services;
