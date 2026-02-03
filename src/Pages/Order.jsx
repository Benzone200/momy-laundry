import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import left from "../assets/images/left.png";
import tshirt from "../assets/images/tshirt.png";
import shirt from "../assets/images/shirt.png";
import sleeve from "../assets/images/sleeve.png";
import skirt from "../assets/images/skirt.png";
import polo from "../assets/images/polo.png";
import suit from "../assets/images/suit.png";
import jeans from "../assets/images/jean.png";
import item from "../assets/images/item.png";

const Order = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("Wash");

  // Orders data
  const orders = [
    { id: 1, name: "T-Shirt", price: 2, category: "Men", image: tshirt },
    { id: 2, name: "Shirt", price: 5, category: "Men", image: shirt },
    { id: 3, name: "Sleeveless", price: 6, category: "Men", image: sleeve },
    { id: 4, name: "Skirt", price: 3, category: "Women", image: skirt },
    { id: 5, name: "Polo", price: 4, category: "Men", image: polo },
    { id: 6, name: "Suit", price: 8, category: "Men", image: suit },
    { id: 7, name: "Jean", price: 3, category: "Men", image: jeans },
  ];

  const services = ["Wash", "Ironing", "Fold", "Dry", "Clean"];

  // State
  const [counts, setCounts] = useState({});
  const [categories, setCategories] = useState({});
  const [pressed, setPressed] = useState(false);

  const increase = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrease = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  const changeCategory = (id, value) => {
    setCategories((prev) => ({ ...prev, [id]: value }));
  };

  // Totals (reactive)
  const totalItems = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalCost = orders.reduce(
    (sum, item) => sum + (counts[item.id] || 0) * item.price,
    0
  );

  return (
    <section className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)}>
          <img src={left} alt="back" className="w-6 h-6" />
        </button>
        <h2 className="mx-auto text-lg font-semibold">Orders List</h2>
      </div>

      {/* Services  */}
      <div className="flex gap-3 px-6 overflow-x-auto scrollbar-hide">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => setSelectedService(service)}
            className={`px-4 py-1 rounded-md border text-sm whitespace-nowrap transition
              ${
                selectedService === service
                  ? "bg-[#ce1567] border-[#ce1567] text-white"
                  : "border-[#38106a] text-[#38106a]"
              }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="mt-6 space-y-4 px-6 mb-10">
        {orders.map((itemData) => (
          <div
            key={itemData.id}
            className="flex items-center justify-between bg-[#f9f9f9] rounded-xl p-4"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img src={itemData.image} alt={itemData.name} className="w-10 h-10" />
              <div>
                <p className="font-medium">{itemData.name}</p>

                <div className="flex items-center">
                  <p className="text-sm text-[#ce1567] mt-[5px]">
                    ${itemData.price}
                  </p>

                  <select
                    value={categories[itemData.id] || itemData.category}
                    onChange={(e) => changeCategory(itemData.id, e.target.value)}
                    className="ml-2 text-[16px] rounded py-[2px] w-fit whitespace-nowrap"
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrease(itemData.id)}
                className="w-7 h-7 rounded-full border flex items-center justify-center"
              >
                −
              </button>
              <span className="w-4 text-center">
                {counts[itemData.id] || 0}
              </span>
              <button
                onClick={() => increase(itemData.id)}
                className="w-7 h-7 rounded-full border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#eaeaea] px-6 py-4 rounded-t-2xl">
  
  {/* Top row */}
  <div className="flex items-center justify-between mb-4">
    
    {/* Left side */}
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-[30px] bg-[#fecee4] flex items-center justify-center ">
        <img src={item} alt="items" className="w-5 h-5" />
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-[#595757]">Total</p>
        <p className="text-base font-semibold">
          {totalItems} Items
        </p>
      </div>
    </div>

    {/* Right side */}
    <div className="flex flex-col items-end">
      <p className="text-sm text-[#595757]">Cost</p>
      <p className="text-lg font-semibold text-[#ce1567]">
        ${totalCost}
      </p>
    </div>

  </div>

  {/* Button */}
  <button
  onClick={() => navigate("/pickup", {
  state: {
    subtotal: totalCost, 
  },
})
}
    onMouseDown={() => setPressed(true)}
    onMouseUp={() => setPressed(false)}
    onMouseLeave={() => setPressed(false)}
    className={`w-full bg-[#ce1567] text-white py-3 rounded-xl font-semibold transition-transform duration-150
      ${pressed ? "scale-95" : "scale-100"}`}
  >
    Confirm Order
  </button>
</div>
    </section>
  );
};

export default Order;
