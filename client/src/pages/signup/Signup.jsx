import React from "react";
import GenderCheckBox from "../../components/molecules/GenderCheckBox";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-w-96 mx-auto flex-col">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
          Signup WebWhisper
        </h1>

        <div>
          <label className="label p-2">
            <span className="text-base label-text justify-start items-start content-start flex">
              Full Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="input h-10 w-full input-bordered"
          ></input>
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text justify-start items-start content-start flex">
              Username
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="input h-10 w-full input-bordered"
          ></input>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text justify-start items-start content-start flex">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="input h-10 w-full input-bordered"
          ></input>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text justify-start items-start content-start flex">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input h-10 w-full input-bordered"
          ></input>
        </div>
        <GenderCheckBox />
        <a
          href="#"
          className="p-1 mt-2 text-sm hover:underline hover:text-blue-500 cursor-pointer inline-block"
        >
          Already have an account?
        </a>
        <button className="p-2 btn btn-block btn-sm mt-2">Login</button>
      </div>
    </div>
  );
};

export default Signup;
