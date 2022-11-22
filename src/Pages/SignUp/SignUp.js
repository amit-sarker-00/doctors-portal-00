import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";
const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  if (token) {
    navigate("/");
  }

  const handelSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then(() => {
        toast("User created successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then((res) => {
            saveUser(data.name, data.email);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800ox] flex justify-center items-center ">
      <div className="p-7">
        <h2 className="text-center text-xl md:text-3xl "> SignUp</h2>
        <form onSubmit={handleSubmit(handelSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-700 font-bold">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent w-full my-5"
            value="SignUp"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-red-600">Not a Valid user</p>}
          </div>
        </form>
        <p>
          Already Have an Account ?{" "}
          <Link className="link-hover text-primary" to="/login">
            Login!
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
