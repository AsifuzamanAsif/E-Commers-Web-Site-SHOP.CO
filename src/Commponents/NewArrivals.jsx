import React from "react";
import { MdStar } from "react-icons/md";
import { FaStarHalf } from "react-icons/fa6";
function NewArrivals() {
  return (
    <section className="container">
      <div className=" py-14 flex justify-center font-secondary text-5xl">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="flex justify-around">
        <div className="py-14">
          <img className=" rounded-3xl" src="product1.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
            T-shirt With Tape Detalis
          </p>
          <div className="flex items-center text-[#FFC633]">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <FaStarHalf />
            <p className=" text-black">4.5/5</p>
          </div>
          <h2 className="font-bold">$120</h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="product2.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
            SKINNY FIT JEANS
          </p>
          <div className="flex items-center text-[#FFC633]">
            <MdStar />
            <MdStar />
            <MdStar />
            <FaStarHalf />
            <p className=" text-black">3.5/5</p>
          </div>
          <h2 className="font-bold">
            $240 <span>$260</span> -20%
          </h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="product3.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
            CHECKERED SHIRT
          </p>
          <div className="flex items-center text-[#FFC633]">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <FaStarHalf />
            <p className=" text-black">4.5/5</p>
          </div>
          <h2 className="font-bold">$180</h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="product4.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
            SLEEVE STRIPED T-SHIRT
          </p>
          <div className="flex items-center text-[#FFC633]">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <FaStarHalf />
            <p className=" text-black">4.5/5</p>
          </div>
          <h2 className="font-bold">
            {" "}
            $130 <span>$160</span> -30%
          </h2>
        </div>
      </div>
      <div className="">
       <h3 className=" border-2 flex justify-center"> View All</h3>
      </div>
    </section>
  );
}

export default NewArrivals;
