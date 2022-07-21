import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { ArrowRightAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const blueButtonColor = "rgb(6, 6, 49)";
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
    background: blueButtonColor,
    margin: "20px",
    marginLeft: "0px",
  },
  avatar: {
    background: "gray",
  },
});

function FlightCart() {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [ispending, setpending] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:4000/home").then((data) => {
      console.log(data.data);
      setCart(data.data);
      setpending(false);
    });
  }, []);

  return (
    <>
      {ispending && (
        <div className="mainLoading">
          <div className="loading"></div>
          <h1
            style={{
              textAlign: "center",
              padding: "20px",
              color: "rgb(6, 6, 49)",
            }}
          >
            Loading...
          </h1>
        </div>
      )}
      {cart.map((carts) => (
        <Grid item md={3} key={carts.flight_id}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {carts.flight_name[0].toUpperCase()}
                </Avatar>
              }
              title={carts.flight_name}
            />
            <CardContent>
              <Typography component="i">from</Typography>
              <Typography variant="h4">
                {carts.start} <ArrowRightAlt /> {carts.stop}
              </Typography>
              <Typography color="primary">{carts.date}</Typography>
              <Typography>{carts.hours} hours</Typography>
            </CardContent>
            <CardActions>
              <Link to={"/bookFlight"}>
                <Button size="small" className={classes.bookNowButton}>
                  Book now
                </Button>
              </Link>
              <Typography className={classes.priceName}>
                ₦{carts.price}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default FlightCart;
