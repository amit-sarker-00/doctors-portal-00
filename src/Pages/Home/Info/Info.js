import React from "react";
import {
  ClockIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
      <div className="rounded-md gap-2 py-12 bg-gradient-to-r from-primary to-secondary flex  items-center">
        <div className=" w-20">
          <ClockIcon className=" text-gray-200 "></ClockIcon>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Opening Hours</h1>
          <small>Lorem Ipsum is simply dummy text of the pri</small>
        </div>
      </div>
      <div className="mx-6 gap-2 rounded-md py-12 bg-gray-600 flex  items-center ">
        <div className=" w-20">
          <MapPinIcon className=""></MapPinIcon>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Visit our location</h1>
          <small>Brooklyn, NY 10036, United States</small>
        </div>
      </div>
      <div className="rounded-md gap-2 py-12 bg-gradient-to-r from-primary to-secondary flex  items-center">
        <div className=" w-20">
          <PhoneArrowUpRightIcon className=" text-gray-200 "></PhoneArrowUpRightIcon>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Contact us now</h1>
          <small>+000 123 456789</small>
        </div>
      </div>
    </div>
  );
};

export default Info;
