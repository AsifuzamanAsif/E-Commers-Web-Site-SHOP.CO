import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
function Navber() {
  return (
    <div className=" bg-white">
      <nav className="container flex justify-between items-center py-8 h-8">
        <div>
          <h2 className="font-primary font-normal text-2xl text-black">
            SHOP.CO
          </h2>
        </div>
        <div>
          <ul className="flex gap-6 font-secondary text-lg font-normal text-black">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="flex items-center w-[500px] rounded-full pl-4 bg-[#F0F0F0]">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full outline-none p-2 rounded-full bg-transparent"
          />
        </div>
        <button className="flex gap-4 text-lg">
          <FaShoppingCart />
          <FaRegUserCircle />
        </button>
      </nav>
    </div>
  );
}

export default Navber;
