import React from "react";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="shadow-lg text-center px-12">
      <div className="">
        <img className="mx-auto mt-11 mb-8" src={img} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p className="mb-9">{description}</p>
      </div>
    </div>
  );
};

export default Service;
