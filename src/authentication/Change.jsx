import React from "react";
import { useNavigate } from "react-router-dom";
import left from "../assets/images/left.png";

const Change = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-1 overflow-hidden">
      {/* Header */}
      <div className="flex flex-row mx-8 items-center">
        <button onClick={() => navigate(-1)}>
          <img src={left} alt="back" />
        </button>
        <h2 className="text-[18px] font-semibold mx-auto">
          Change Password
        </h2>
      </div>

      {/* Instructions */}
      <div className="flex flex-col mt-40 mx-10">
        <h2 className="text-[18px] text-[#ce1567] font-semibold">
          Change Password
        </h2>
        <p className="mt-2 w-[350px] text-[13px] text-[#595757]">
          Enter your new password below to change your current password.
        </p>
      </div>

      {/* Password Form */}
      <form className="mt-10 ml-9">
        <input
          type="password"
          placeholder="Password"
          className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-6 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-6 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"
        />
      </form>

      {/* Submit Button */}
      <button
        onClick={() => navigate("/login")}
        className="bg-[#ce1567] text-white py-3 px-10 rounded-lg text-[14px] font-medium hover:bg-[#ce1567] focus:outline-none focus:ring-2 focus:ring-blue-500 w-[320px] ml-10 mt-4"
      >
        Change Password
      </button>
    </section>
  );
};

export default Change;
