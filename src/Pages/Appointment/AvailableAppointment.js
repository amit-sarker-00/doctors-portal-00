import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Home/Home/Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/serviceOptions?date=${date}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointment {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-24">
        {appointments.map((appointment) => (
          <AppointmentOption
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
