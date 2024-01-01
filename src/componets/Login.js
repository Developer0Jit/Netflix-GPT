import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);

  const toggleSign = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSign} className="cursor-pointer">
          {" "}
          {isSignForm
            ? "New to Netflix ? Sign Up Now"
            : "Alredy Registered: Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
