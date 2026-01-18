import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import touch from "../assets/images/touch.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your real authentication logic
    // For now, we just navigate to Verify with state
    navigate("/verify", { state: { fromLogin: true } });
  };

  return (
    <section className="h-screen flex flex-col px-4 overflow-hidden">
      {/* Logo */}
      <img
        src={logo}
        alt="Company Logo"
        className="w-40 mx-auto mt-40"
      />

      {/* Login Form */}
      <form className="mt-15 ml-5" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-6 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-2 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"
          required
        />

        {/* Login Button */}
        <button
        onClick={() => navigate("/verify")}
          type="submit"
          className="bg-[#ce1567] text-white py-3 px-10 rounded-lg text-[14px] font-medium hover:bg-[#ce1567] focus:outline-none focus:ring-2 focus:ring-blue-500 w-[320px] mt-4"
        >
          Login
        </button>
      </form>

      {/* Forgot Password Link */}
      <button
        onClick={() => navigate("/forgot-password")}
        className="text-[#ce1567] text-[14px] mx-56 w-[300px] text-left mt-2"
      >
        Forgot Password?
      </button>

      {/* Social Login */}
      <div className="mt-10 mx-auto flex flex-col items-center">
        <p>You can also login with</p>
        <div className="flex flex-row mt-4 gap-4 mx-auto">
          <div className="flex items-center justify-center w-13 h-13 border-1 border-pink-500 rounded-full bg-white">
            <img src={facebook} alt="Facebook" />
          </div>
          <div className="flex items-center justify-center w-13 h-13 border-1 border-pink-500 rounded-full bg-white">
            <img src={google} alt="Google" />
          </div>
        </div>
      </div>

      {/* Sign Up Prompt */}
      <p className="text-[14px] mx-auto mt-20">
        Don’t have an account?{" "}
        <button
          onClick={() => navigate("/register")}
          className="text-[#ce1567]"
        >
          Sign up now
        </button>
      </p>
    </section>
  );
};

export default Login;
