import CountUp from "react-countup";
function Banner() {
  return (
    <section className="pt-6 bg-[#F2F0F1]">
      <div className="container flex">
        <div className="pt-28">
          <h1 className="font-bannerfont text-4xl font-bold w-72 ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="pt-4 font-bannerfont w-2/5 text-sm font-normal">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="pt-8">
            <button className=" py-4 px-8 bg-black text-white rounded-2xl text-2xl">
              Shop Now
            </button>
          </div>
          <div className="pt-12">
            <ul className=" grid grid-cols-3 gap-6 text-4xl w-3/4">
              <li className=" border-r-2">
                <CountUp end={200} className="font-bold" />+
                <p className="text-sm">International Brands</p>
              </li>
              <li className=" border-r-2">
                <CountUp end={2000} className="font-bold" />+
                <p className="text-sm">High-Quality Products</p>
              </li>
              <li>
                <CountUp end={30000} className="font-bold" />+
                <p className="text-sm">Happy Customers</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-fit" src="Banner.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
