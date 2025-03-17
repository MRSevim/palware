import React from "react";
import CenteredSmallContainer from "../CenteredSmallContainer";
import PrimaryButton from "../PrimaryButton";

const FinalCta = () => {
  return (
    <div className="my-25 text-center">
      <CenteredSmallContainer>
        <p className="text-thin my-5">Tagline</p>
        <h2 className="font-bold text-2xl my-5">Looking for a friend?</h2>
        <div className="mb-5">
          <PrimaryButton>Get one</PrimaryButton>
        </div>
      </CenteredSmallContainer>
    </div>
  );
};

export default FinalCta;
