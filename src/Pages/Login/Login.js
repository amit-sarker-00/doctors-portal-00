import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const handelLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then(() => {
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // google sign in
  const handelGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[800ox] flex justify-center items-center ">
      <div className="p-7">
        <h2 className="text-center text-xl md:text-3xl "> Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
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
            className="btn my-5 btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && (
              <p className="text-red-600 font-bold">Wrong Password or Email </p>
            )}
          </div>
        </form>
        <label className="label mb-3">
          <span className="label-text link-hover">Forget Your Password?</span>
        </label>
        <p>
          New to Doctors Portal ?{" "}
          <Link className="link-hover text-primary" to="/signup">
            Create New Account!
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handelGoogleLogin} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
