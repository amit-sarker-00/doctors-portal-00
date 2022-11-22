import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16  dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-blue-600">
              <span className="sr-only">Error</span>404
            </h2>

            <p className="mt-4 mb-8 text-red-500 font-bold">
              Sorry we couldn't find This Page
            </p>
            <Link
              to="/home"
              className="px-8 py-3 font-semibold rounded dark:bg-blue-600 dark:text-white font-bold"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
