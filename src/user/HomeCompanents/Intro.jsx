import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ViewMoreButton from "../../GeneralCompanents/Viewmore";

function Intro() {
  const style = {
    homeIntro: {
      paddingTop: "15%",
    },
    introText: {
      paddingTop: 20,
      marginTop: "auto",
    },
  };
  return (
    <div className="">
      <center>
        <Typography variant="h3" style={style.homeIntro}>
          {" "}
          Welcome to Flight reservation system
        </Typography>
        <Typography variant="body1" style={style.introText} fontSize={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor
          esse tempora dicta nobis, magni labore officiis in ullam non dolore
          similique ducimus nihil blanditiis tempore animi. Mollitia, laudantium
          maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          dolor esse tempora dicta nobis, magni labore officiis in ullam non
          dolore similique ducimus nihil blanditiis tempore animi. Mollitia,
          laudantium maxime?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui dolor esse tempora dicta nobis, magni labore officiis in
          ullam non dolore similique ducimus nihil blanditiis tempore animi.
          Mollitia, laudantium maxime?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui dolor esse tempora dicta nobis, magni labore
          officiis in ullam non dolore similique ducimus nihil blanditiis
          tempore animi. Mollitia, laudantium maxime?
        </Typography>

        <Link to="/flight">
          {" "}
          <ViewMoreButton text="Book flight" />
        </Link>
      </center>
    </div>
  );
}

export default Intro;
