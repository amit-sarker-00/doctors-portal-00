import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import DentalCare from "./DentealCare/DentalCare";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
