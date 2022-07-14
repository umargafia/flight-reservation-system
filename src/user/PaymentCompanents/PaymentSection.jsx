import { makeStyles } from "@material-ui/core";
import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginTextField from "../../GeneralCompanents/LoginTextField";
import { MyHeaderText } from "../../GeneralCompanents/MyText";
import ViewMoreButton from "../../GeneralCompanents/Viewmore";

const useStyles = makeStyles({
  main: {
    margin: 50,
    padding: 30,
  },
});

const PaymentSection = () => {
  const classes = useStyles();

  return (
    <Card className={classes.main} elevation={10}>
      <MyHeaderText text="Payment" />

      <LoginTextField text="Card Number" typ="number" />
      <LoginTextField text="Name" />
      <LoginTextField text="Exp Date" />
      <LoginTextField text="CVV" typ="number" />

      <Link to="/sucess">
        {" "}
        <ViewMoreButton text={"Pay and Book "} />
      </Link>
      <Link to="/bookflight">
        {" "}
        <ViewMoreButton text={"Back "} />
      </Link>
    </Card>
  );
};

export default PaymentSection;
