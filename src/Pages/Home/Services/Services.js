import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      id: "1",
      name: "Fluoride Treatment",
      img: img1,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "2",
      name: "Cavity Filling",
      img: img2,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "3",
      name: "Teeth Whitening",
      img: img3,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <div className="text-center mt-32 mb-16">
        <p className="text-cyan-400 font-bold">OUR SERVICES</p>
        <h2>Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-36">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
