import React, { useRef, useState } from "react";
import left from "../assets/images/left.png";

const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <section className="mt-1 overflow-hidden">
      <div className="flex flex-row mx-8 items-center">
        <button onClick={() => navigate(-1)} className="p-1">
      <img
        src={left}
        alt="back"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer"
      />
    </button>
        <h2 className="text-[18px] font-semibold  mx-auto">
          Verification Code
        </h2>
      </div>

      {/* OTP Text */}
      <div className="flex flex-col mt-40 mx-10">
        <h2 className="text-[18px] text-[#ce1567] font-semibold">OTP</h2>
        <p className="mt-2 w-[350px] text-[13px] text-[#595757]">
          OTP has been sent to your registered phone number. Please verify.
        </p>
      </div>

      {/* OTP Boxes */}
      <div className="flex justify-center gap-3 mt-8">
        {otp.map((digit, index) => (
         <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-11 h-11 text-center text-lg font-semibold border border-gray-300 bg-[#f3f3f3] rounded-md focus:outline-none focus:border-[#ce1567] "
/>
        ))}
      </div>

      {/* Resend OTP */}
      <p className="mt-6 mx-25 w-[400px] text-[14px]">Didnt receive OTP? <a href="#" className="text-[#ce1567]">Send again</a></p>

      {/* Verify Button */}
        
              <button className="bg-[#ce1567] w-[350px] mt-10 ml-6 text-white py-3 px-10 rounded-lg text-[14px] font-semibold hover:bg-[#ce1567]  ">
                Verify
      
              </button>


    </section>
  );
};

export default Verify;
