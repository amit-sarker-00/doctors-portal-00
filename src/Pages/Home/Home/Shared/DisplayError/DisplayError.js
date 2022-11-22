import { ErrorResponse } from "@remix-run/router";
import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handelSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p className="text-red-500 ">Something went wrong</p>
      <p className="text-red-600">
        {ErrorResponse.statusText || error.message}
      </p>
      <h4 className="text-3xl">
        {" "}
        Please{" "}
        <button className="btn btn-xs" onClick={handelSignOut}>
          LogOut
        </button>
        and log back In.
      </h4>
    </div>
  );
};

export default DisplayError;
