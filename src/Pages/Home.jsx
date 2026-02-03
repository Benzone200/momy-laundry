import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import pfp from "../assets/images/pfp.png";
import noti from "../assets/images/noti.png";
import search from "../assets/images/search.png";
import wash from "../assets/images/wash.png";
import fold from "../assets/images/fold.png";
import iron from "../assets/images/iron.png";
import dry from "../assets/images/dry.png";
import order from "../assets/images/order.png";
import time from "../assets/images/time.png";
import delivery from "../assets/images/delivery.png";
import transit from "../assets/images/transit.png";
import home from "../assets/images/home.png";
import history from "../assets/images/history.png";
import setting from "../assets/images/setting.png";
import cross from "../assets/images/cross.png";
import bg from "../assets/images/bg.png";
import item from "../assets/images/item.png";

// Services data
const services = [
  {
    src: wash,
    text: "Wash",
  },
  {
    src: fold,
    text: "Fold",
  },
  {
    src: iron,
    text: "Iron",
  },
  {
    src: dry,
    text: "Dry",
  },
];

const orders = [
  {
    icon: time,
    orderId: "#123",
    bags: 2,
    price: "$60.23",
    startTime: "10:00",
    endTime: "20:00",
    date: "Thu, 1 Apr",
  },
  {
    icon: transit,
    orderId: "#123",
    bags: 2,
    price: "$60.23",
    startTime: "10:00",
    endTime: "20:00",
    date: "Thu, 1 Apr",
  },
  {
    icon: delivery,
    orderId: "#123",
    bags: 2,
    price: "$60.23",
    startTime: "10:00",
    endTime: "20:00",
    date: "Thu, 1 Apr",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-5 mx-5 bg-white overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <img
            src={pfp}
            alt="profile"
            className="w-[45px] h-[45px] rounded-full"
          />

          <div>
            <h3 className="text-[18px] text-[#38106A] font-semibold">
              Hi, Dunu Chisom
            </h3>
            <p className="text-[14px] text-gray-600">
              Gold member <span className="opacity-40">|</span> Total:
              <span className="font-semibold"> 100</span> points
            </p>
          </div>
        </div>

        {/* Notification */}
        <img
          src={noti}
          alt="notification"
          className="ml-auto w-7 h-7 mb-3 cursor-pointer"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mt-5 px-4 py-2 bg-[#e7e3e3] rounded-lg">
  <img src={search} alt="search" className="w-5 h-5" />

  <input
    type="text"
    placeholder="Search services"
    className="bg-transparent outline-none w-full text-[#595757] text-[15px] placeholder-[#595757]"
  />
</div>

      {/* Services Section */}
      <section className="mt-6">
        <h2 className="text-[18px] font-semibold text-[#38106A] mb-4">
          Services
        </h2>

        <div className="grid grid-cols-4 gap-5 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col h-[80px] w-[80px]  items-center justify-center bg-white rounded-xl shadow-sm py-4 cursor-pointer hover:shadow-md transition active:scale-95"
            >
              {/* Icon */}
              <div className="bg-[#F4ECFF] rounded-full p-2 mb-2">
                <img
                  src={service.src}
                  alt={service.text}
                  className="w-8 h-8"
                />
              </div>

              {/* Text */}
              <p className="text-[14px] font-medium text-[#38106A]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

          {/*order Section*/}
          <section className="mt-5">
            <div className="flex items-center gap-2 mt-8 px-4 py-3 bg-[#38106A] rounded-lg  ">
              <div className="flex flex-row gap-5">
              <img src={order} className="w-40"></img>
              <div className="flex flex-col text-white mt-2 ">
                <h3 className="text-[30px] font-bold ml-2">40% <span className="text-[20px] font-light">OFF</span></h3>
                <h5 className="text-[15px] ml-2">First order</h5>
                
                <a href="#" className="border border-1 mt-3 px-5 py-[2px] rounded-xl text-[16px] ">Book Now</a>
            
              </div>
                
              </div>
            </div>


            {/*Order History*/}
            <div className="mt-8">
              <h2 className="text-[#38106A] text-[18px] font-semibold"> Last orders</h2>

              <section className="mt-5 space-y-2">
  {orders.map((order, index) => (
    <div
      key={index}
      className="flex items-center gap-4 bg-[#F9F9F9] border border-[#F9F9F9] rounded-2xl p-3"
    >
      {/* Left Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
        <img
          src={order.icon}
          alt="order status"
          className="w-10 h-10 mb-6"
        />
      </div>

      {/* Middle content */}
      <div className="flex-1">
        <h3 className="font-semibold text-[16px] text-[#1F1F1F] ">
          Order {order.orderId}{" "}
          <span className="text-gray-500 font-normal">
            ({order.bags} bags)
          </span>
        </h3>

        {/* Timeline */}
        <div className="flex items-center  mt-1 w-[100px]">
          <div>
            <p className="font-semibold text-[#38106A] ">
              {order.startTime}
            </p>
            <p className="text-sm text-gray-500 w-[70px]">{order.date}</p>
          </div>

          {/* dotted line */}
          <div className="flex items-center  ">
            <span className="w-2 h-2 rounded-full border border-pink-500"></span>
            <span className="w-14 border-t border-dashed border-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
          </div>

          <div>
            <p className="font-semibold  w-[70px] text-[#38106A]">
              {order.endTime}
            </p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <p className="font-semibold text-pink-600 text-[16px] mb-10">
        {order.price}
      </p>
    </div>
  ))}
</section>

<section className="relative w-[350px] h-[120px] mt-4">
  {/* Background image */}
  <img
    src={bg}
    alt="bottom nav background"
    className="w-[450px] h-[120px] object-cover"
  />

  {/* Floating + button */}
  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
    <div className="w-16 h-16 rounded-full bg-[#CE1567] flex items-center justify-center shadow-lg">
     <button onClick={() => navigate("/order")} className="p-1">
      <img src={cross} alt="add" className="w-8 h-8" />
      </button>
    </div>
  </div>

  {/* Left icons */}
  <div className="absolute bottom-14 left-1 flex gap-10">
    <img src={home} alt="home" className="w-7 h-7" />
    <img src={search} alt="search" className="w-6 h-6 opacity-60" />
  </div>

  {/* Right icons */}
  <div className="absolute bottom-15 right-2 flex gap-10">
    <img src={history} alt="orders" className="w-6 h-6 opacity-60" />
    <img src={setting} alt="settings" className="w-6 h-6 opacity-60" />
  </div>
</section>

            </div>



          </section>

    </section>
  );
};

export default Home;