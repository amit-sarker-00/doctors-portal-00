import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/appointmentOptionSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handelAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          //save doctor information to database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",

              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                console.log(result);
                toast.success("Doctor added successfully");
                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };
  if (isLoading) {
    return;
  }
  return (
    <div className="w-96 p-7">
      <form onSubmit={handleSubmit(handelAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="email"
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-700 font-bold">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty", {
              required: "specialty is required",
            })}
            className="select select-bordered  w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            className="input w-full max-w-xs"
            type="file"
            {...register("image", {
              required: "Photo is required",
            })}
          />
        </div>
        <input
          className="btn btn-accent w-full my-5"
          value="Add Doctor"
          type="submit"
        />
        <div>
          {/* {signUpError && <p className="text-red-600">Not a Valid user</p>} */}
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
