import React from "react";
import { useNavigate } from "react-router-dom";
import left from "../assets/images/left.png";

const Forgot = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-1 overflow-hidden bg-white">
      {/* Header */}
      <div className="flex flex-row mx-8 items-center">
        <button onClick={() => navigate(-1)}>
          <img src={left} alt="back" />
        </button>
        <h2 className="text-[18px] font-semibold mx-auto">
          Forgot Password
        </h2>
      </div>

      {/* Instructions */}
      <div className="flex flex-col mt-40 mx-10">
        <h2 className="text-[18px] text-[#ce1567] font-semibold">Forgot Password</h2>
        <p className="mt-2 w-[350px] text-[13px] text-[#595757]">
          Enter the email address associated with your account. We’ll send you a link to reset your password.
        </p>
      </div>

      {/* Email Input */}
      <form className="mt-10 ml-9">
        <input
          type="email"
          placeholder="Enter Email"
          className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-6 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"
        />
      </form>

      {/* Reset / Register Button */}
      <button
        onClick={() => navigate("/change-password")}
        className="bg-[#ce1567] text-white py-3 px-10 rounded-lg text-[14px] font-medium hover:bg-[#ce1567] focus:outline-none focus:ring-2 focus:ring-blue-500 w-[320px] ml-10 mt-4"
      >
        Reset Password
      </button>
    </section>
  );
};

export default Forgot;
