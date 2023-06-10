import React from "react";
import Navbar from "../../Navigation/Navbar";
import Herosection from "../../Herosection/Herosection";
import Features from "../../../Features/Features";
import CardComponent from "../../Price/CardComponent";
import CallToAction from "../../CallToAction/CallToAction";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Herosection/>
      <Features/>
      <CardComponent/>
      <CallToAction/>
    </>
  );
};

export default Homepage;
