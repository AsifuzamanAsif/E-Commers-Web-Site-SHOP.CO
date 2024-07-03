import React, { useEffect, useState } from "react";
import Navber from "../Commponents/Navber";
import Banner from "../Commponents/Banner";
import Logo from "../Commponents/Logo";
import TopSelling from "../Commponents/TopSelling";
import Dstyle from "../Commponents/Dstyle";
import HappyCostumer from "../Commponents/HappyCostumer";
import NewArrivals from "../Commponents/NewArrivals";
const Home = () => {
  return (
    <>
      <div>
        <Navber />
        <Banner />
        <Logo />
        <NewArrivals />
        <TopSelling />
        <Dstyle />
        <HappyCostumer />
      </div>
    </>
  );
};

export default Home;
