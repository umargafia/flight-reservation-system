import React from "react";
import SearchArea from "./SearchArea";
import Nav from "../HomeCompanents/Nav";
import AvailableFlight from "./AvailableFlight";
import Footer from "../HomeCompanents/Footer";

const Flight = () => {
  return (
    <span className="flightDiv">
      <Nav color="rgb(6, 6, 49)" />
      <SearchArea />
      <AvailableFlight />
      <Footer />
    </span>
  );
};

export default Flight;
