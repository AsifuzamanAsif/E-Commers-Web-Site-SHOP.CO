import React from "react";

function TopSelling() {
  return (
    <section className=" container pb-14">
      <div className=" m-28 flex justify-center font-bannerfont font-bold text-3xl">
        <h1>TOP SELLING</h1>
      </div>
      <div className="flex justify-around">
        <div className="py-14">
          <img className=" rounded-3xl" src="SELL1.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
          VERTICAL STRIPED SHIRT
          </p>
          <div className="flex items-center text-[#FFC633]">
            <p className=" text-black">4.5/5</p>
          </div>
          <h2 className="font-bold">$120</h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="sell2.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
          COURAGE GRAPHIC T-SHIRT
          </p>
          <div className="flex items-center text-[#FFC633]">
            <p className=" text-black">3.5/5</p>
          </div>
          <h2 className="font-bold">
            $240 <span>$260</span> -20%
          </h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="sell3.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
          LOOSE FIT BERMUDA SHORTS
          </p>
          <div className="flex items-center text-[#FFC633]">
            <p className=" text-black">4.5/5</p>
          </div>
          <h2 className="font-bold">$180</h2>
        </div>
        <div className="py-14">
          <img className=" rounded-3xl" src="sell4.png" alt="" />
          <p className=" pt-4 font-productfont font-bold text-sm">
          FADED SKINNY JEANS
          </p>
          <div className="flex items-center text-[#FFC633]">
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

export default TopSelling;
