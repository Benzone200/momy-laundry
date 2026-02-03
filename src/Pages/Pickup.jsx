 import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// images
import left from "../assets/images/left.png";
import paypal from "../assets/images/paypal.png";
import pickup from "../assets/images/pickup.png";
import cash from "../assets/images/cash.png";
import calendar from "../assets/images/calendar.png";
import visa from "../assets/images/visa.png";
import address from "../assets/images/address.png";

const TAX = 10;

const Pickup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // subtotal passed from confirm order page
  const subtotal = location.state?.subtotal || 0;

  const total = useMemo(() => subtotal + TAX, [subtotal]);

  const [payment, setPayment] = useState("card");

  return (
    <section className="min-h-screen bg-white pb-28">
      {/* Header */}
      <div className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)}>
          <img src={left} alt="back" className="w-6 h-6" />
        </button>
        <h2 className="mx-auto text-lg font-semibold">Schedule a Pickup</h2>
      </div>

      {/* Price details */}
      <h3 className="px-6 mt-4 text-[#5207ad] font-bold">Price details</h3>
      <div className="mx-6 mt-3 bg-[#fafafa] rounded-xl p-4 space-y-3">
        <div className="flex justify-between text-[#5207ad]">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#5207ad]">
          <span>Tax</span>
          <span>${TAX}</span>
        </div>
        <div className="border-t border-[#E9EBF0] pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-[#ce1567]">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Schedule Date */}
      <h3 className="px-6 mt-6 text-[#5207ad] font-bold">Schedule Date</h3>
      <div className="mx-6 mt-3 border rounded-xl flex overflow-hidden border-[#E9EBF0]">
        <div className="flex-1 p-4 flex gap-3 items-start">
          <img src={pickup} alt="pickup" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Pickup Time</p>
            <p className="font-semibold text-[14px]">Thu, 1 Apr</p>
            <p className="text-[#5207ad] font-semibold text-[18px]">10:00 AM</p>
          </div>
        </div>
        <div className="w-px bg-gray-200" />
        <div className="flex-1 p-4 flex gap-3 items-start">
          <img src={calendar} alt="delivery" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Delivery Time</p>
            <p className="font-semibold text-[14px]">Wed, 2 Apr</p>
            <p className="text-[#5207ad] font-semibold text-[18px]">21:00 PM</p>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <h3 className="px-6 mt-6 text-[#5207ad] font-bold">Payment method</h3>
      <div className="mx-6 mt-3 border rounded-xl border-[#E9EBF0]">

        {[
          { id: "paypal", label: "Pay Via Paypal", sub: "+ Add account", icon: paypal },
          { id: "card", label: "Visa/Master Card", sub: "**** **** **** 1234", icon: visa },
          { id: "cash", label: "Cash On Delivery", icon: cash },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setPayment(p.id)}
            className="w-full flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border
                ${payment === p.id ? "bg-[#ce1567] border-[#ce1567]" : "border-gray-300"}`}
              >
                {payment === p.id && <span className="text-white text-xs">✓</span>}
              </div>
              <div>
                <p className="font-semibold">{p.label}</p>
                {p.sub && <p className="text-sm text-gray-500">{p.sub}</p>}
              </div>
            </div>
            <img src={p.icon} className="h-6" />
          </button>
        ))}
      </div>


      {/* Address */}
      <h3 className="px-6 mt-6 text-[#5207ad] font-bold">Address</h3>
      <div className="mx-6 mt-3 border border-[#E9EBF0] rounded-xl p-4 space-y-4">
        <div className="flex gap-3">
          <img src={address} alt="pickup address" className="w-5 h-5" />
          <div>
            <p className="font-semibold">Pickup Address</p>
            <p className="text-sm text-gray-500">CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</p>
          </div>
        </div>
        <div className="border-t border-[#E9EBF0]" />
        <div className="flex gap-3">
          <img src={address} alt="delivery address" className="w-5 h-5" />
          <div>
            <p className="font-semibold">Delivery Address</p>
            <p className="text-sm text-gray-500">CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</p>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9EBF0] rounded-xl px-6 py-4">
        <button className="w-full bg-[#ce1567] text-white py-4 rounded-xl font-semibold">
          Confirm Order
        </button>
      </div>
    </section>
  );
};

export default Pickup;
