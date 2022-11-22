import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment; //treatment is appointment option just different name
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      phone,
      email,
      slot,
      price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreatment(null);
        if (data?.acknowledged) {
          toast.success("Booking successfully done");
          refetch();
        } else {
          toast.error(data.message);
        }
      });

    // todo : send data to the server and once data is saved then close the modal
    //and a display success toast
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-9">{treatmentName}</h3>

          <form onSubmit={handelBooking} className="text-center">
            <input
              type="text"
              name="date"
              defaultValue={date}
              disabled
              className="input w-full input-bordered input-primary mb-2 "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered input-primary mb-2"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email Address"
              className="input w-full input-bordered input-primary mb-2"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input w-full input-bordered input-primary mb-2"
              required
            />
            <button type="text" className="btn w-full btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
