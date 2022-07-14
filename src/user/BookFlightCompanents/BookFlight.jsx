import { makeStyles } from "@material-ui/core";
import { ArrowBackIos, ForkLeft } from "@mui/icons-material";
import { Radio, RadioGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ViewMoreButton from "../../GeneralCompanents/Viewmore";
import LoginTextField from "../../GeneralCompanents/LoginTextField";
import "./BFlight.css";

const useStyle = makeStyles({
  bookFlightText: {
    color: "black",
    textAlign: "center",
  },
});

const BookFlight = () => {
  const classes = useStyle();
  return (
    <form className="bkDiv">
      <Typography className={classes.bookFlightText} variant="h3">
        Book flight
      </Typography>

      <LoginTextField text="Surname" varian="filled" />
      <LoginTextField text="First Name" varian="filled" />
      <LoginTextField text="Last Name" varian="filled" />
      <LoginTextField text="Email" typ="email" varian="filled" />
      <LoginTextField text="Phone Number" varian="filled" typ="number" />
      <LoginTextField text="Number of Adults" varian="filled" typ="number" />
      <LoginTextField text="Number of Children" varian="filled" typ="number" />
      <LoginTextField text="Adress" varian="filled" />

      <Link to="/payment">
        {" "}
        <ViewMoreButton text={"Proceed to payment "} />
      </Link>
      <Link to={"/flight"}>
        {" "}
        <ViewMoreButton text={"Cancel"} />
      </Link>
    </form>
  );
};

export default BookFlight;
