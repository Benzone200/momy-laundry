import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import perfect from "../assets/images/perfect.png";
import right from "../assets/images/right.png";
import clothes from "../assets/images/clothes.png";
import walk from "../assets/images/walk.png";

const slides = [
  {
    image: perfect,
    title: "Perfect Equipment",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto, velit? Voluptates ex molestias excepturi, dolorum magni qui eius non, repellat id consequuntur, eos magnam sit fuga? Delectus error, beatae.",
  },
  {
    image: clothes,
    title: "All type of Clothes",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto, velit? Voluptates ex molestias excepturi, dolorum magni qui eius non, repellat id consequuntur, eos magnam sit fuga? Delectus error, beatae.",
  },
  {
    image: walk,
    title: "Professional Walk",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto, velit? Voluptates ex molestias excepturi, dolorum magni qui eius non, repellat id consequuntur, eos magnam sit fuga? Delectus error, beatae.",
  },
];

const Intro = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      // Last slide → Login
      navigate("/login");
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) nextSlide();
    if (swipeDistance < -50) prevSlide();
  };

  return (
    <section className="h-screen flex flex-col justify-between px-4 overflow-hidden">

      {/* Logo */}
      <img
        src={logo}
        alt="Company Logo"
        className="w-30 mx-auto mt-12"
      />

      {/* Slides */}
      <div
        className="flex-1 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center text-center"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-60 mt-10 md:w-72 lg:w-80"
              />

              <h2 className="mt-8 text-[24px] font-bold text-[#292929]">
                {slide.title}
              </h2>

              <p className="max-w-sm text-[14px] leading-[18px] text-[#595757] mt-3 px-2">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? "bg-[#fc1e82] w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mb-8 px-4">
        <button
          onClick={() => navigate("/login")}
          className="text-[16px] font-medium text-[#190234]"
        >
          Skip
        </button>

        <button
          onClick={nextSlide}
          className="rounded-full p-2 bg-[#fc1e82]"
        >
          <img src={right} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Intro;
