import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { ColorRing } from "react-loader-spinner";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const bookings = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = bookings;
  if (navigation.state === "loading") {
    return (
      <ColorRing
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
  return (
    <div>
      <h1 className="text-3xl text-center mb-5">payment for {treatment}</h1>
      <hr />
      <p className="text-red-400 font-bold text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookings={bookings} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
