import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <FadeLoader className="text-center my-10 mx-auto" color="#36d7b7" />
    </div>
  );
};

export default Loading;
