import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      id: "1",
      name: "Winson Herry",
      location: "California",
      img: people,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "2",
      name: "Winson Herry",
      location: "California",
      img: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "3",
      name: "Winson Herry",
      location: "California",
      img: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section>
      <div className="mb-36 flex justify-between ">
        <div>
          <h4 className="text-cyan-400 font-mono font-bold">Testimonial</h4>
          <h1 className="text-xl md:text-4xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img src={quote} className="lg:w-48  w-24" alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-36">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
