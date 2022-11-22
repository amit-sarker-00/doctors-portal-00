import React from "react";

const Review = ({ review }) => {
  const { name, description, location, img } = review;
  return (
    <div className="shadow-lg px-7">
      <div>
        <p>{description}</p>
      </div>
      <div className="flex items-center my-9 gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h3>{name}</h3>
          <small>{location}</small>
        </div>
      </div>
    </div>
  );
};

export default Review;
