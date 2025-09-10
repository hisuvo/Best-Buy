import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolice from "../components/OurPolice";
import NewsLetterBox from "../components/common/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolice />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
