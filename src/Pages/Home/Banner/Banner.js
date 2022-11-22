import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className=" hero py-52">
        <div className="hero-content px-12 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="hidden sm:block md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
