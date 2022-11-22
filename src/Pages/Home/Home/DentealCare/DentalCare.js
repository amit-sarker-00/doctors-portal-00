import React from "react";
import dental from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
const DentalCare = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
      <div>
        <img className="md:w-96 mx-auto" src={dental} alt="" />
      </div>
      <div className="text-start">
        <h1 className="text-xl md:text-3xl font-bold lg:text-5xl">
          Exceptional Dental
          <br /> Care, on Your Terms
        </h1>
        <p className="my-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default DentalCare;
