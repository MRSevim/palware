import React from "react";
import Icon from "../Icon";
import Image from "next/image";

const Features = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-25">
        <FeatureWrapper>
          <HeaderDiv>
            <Icon type="paw" />
            <HeaderSpan>This is One</HeaderSpan>
          </HeaderDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            suscipit enim placeat! Dolore optio iure ratione nihil, consequuntur
            laborum blanditiis sed cum iste consequatur, at molestias dicta
            doloribus eos quae et expedita fugiat. Explicabo, quas velit est ad
            facere eos quod ratione molestias repellat accusantium excepturi
            voluptatum dignissimos nesciunt.
          </p>
        </FeatureWrapper>
        <FeatureWrapper>
          <HeaderDiv>
            <Icon type="cat" />
            <HeaderSpan>This is Two</HeaderSpan>
          </HeaderDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            suscipit enim placeat! Dolore optio iure ratione nihil, consequuntur
            laborum blanditiis sed cum iste consequatur, at molestias dicta
            doloribus eos quae et expedita fugiat. Explicabo, quas velit est ad
            facere eos quod ratione molestias repellat accusantium excepturi
            voluptatum dignissimos nesciunt.
          </p>
        </FeatureWrapper>
        <FeatureWrapper>
          <HeaderDiv>
            <Icon type="heart" />
            <HeaderSpan>This is Three</HeaderSpan>
          </HeaderDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            suscipit enim placeat! Dolore optio iure ratione nihil, consequuntur
            laborum blanditiis sed cum iste consequatur, at molestias dicta
            doloribus eos quae et expedita fugiat. Explicabo, quas velit est ad
            facere eos quod ratione molestias repellat accusantium excepturi
            voluptatum dignissimos nesciunt.
          </p>
        </FeatureWrapper>
      </div>
      <HeadlineWithImage image="feature-1.jpg"></HeadlineWithImage>
      <HeadlineWithImage image="feature-2.jpg"></HeadlineWithImage>
    </>
  );
};

const HeadlineWithImage = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col-reverse gap-4 my-20 justify-between even:lg:flex-row-reverse lg:flex-row items-center">
      <div className="flex flex-col justify-center lg:mx-10">
        {" "}
        <h2 className="font-semibold text-xl mb-5">
          {" "}
          Long Headline With Image At The Side
        </h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non, enim!
        </p>
        <ul className="list-disc list-inside">
          <li className="li">Item 1</li>
          <li className="li">Item 2</li>
          <li className="li">Item 3</li>
        </ul>
      </div>
      <Image src={`/images/${image}`} width={500} height={334} alt="Feature" />
    </div>
  );
};

const FeatureWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 text-center bg-slate-200 rounded-lg">{children}</div>
  );
};

const HeaderDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-2 flex items-center justify-center">{children}</div>
  );
};

const HeaderSpan = ({ children }: { children: React.ReactNode }) => {
  return <span className="ms-3 font-semibold">{children}</span>;
};

export default Features;
