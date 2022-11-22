import React from "react";

const AppointmentOption = ({ appointment, setTreatment }) => {
  const { name, slots, price } = appointment;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-primary mx-auto">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <p>
            <small>Price :${price}</small>
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(appointment)}
              htmlFor="booking-modal"
              className="btn text-white btn-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
