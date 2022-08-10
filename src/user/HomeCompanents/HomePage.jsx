import React from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import FlightCart from "./FlightCart";
import { ViewMoreArrows } from "../../GeneralCompanents/Viewmore";
import Footer from "./Footer";
function Home() {
  return (
    <span>
      <div className="mainHome">
        <Nav />
        <Intro />
      </div>
      <h1 className="available-flight-text">Available flights</h1>
      <div className="home-book-flight">
        <div className="home-book-flight  cardDiv">
          <FlightCart />
        </div>  

        <div>
          <ViewMoreArrows />
        </div>
      </div>
      <Footer />
    </span>
  );
}

export default Home;
