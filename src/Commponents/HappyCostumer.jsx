// import React from "react";
// import Slider from "react-slick";

// function SimpleSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default SimpleSlider;
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdStar } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
function HappyCostumer() {
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  var settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // previous
  };
  return (
    <section className="py-10 container slider-container flex flex-col gap-4">
      <div className=" pt-20  pb-10 font-secondary font-bold text-5xl">
        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>
      <Slider {...settings}>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className=" py-8 px-7 border rounded-2xl w-96">
              <div className="flex text-xl text-[#FFC633]">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <div className="flex items-center py-3 font-primary font-bold text-xl">
                <h2>Alex K.</h2>
                <VscVerifiedFilled className=" text-green-800" />
              </div>
              <div className="font-primary text-sm">
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
          </h3>
        </div>
      </Slider>
    </section>
  );
}

export default HappyCostumer;
