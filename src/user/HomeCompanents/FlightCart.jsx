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
    fetch("http://localhost:8000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
       setpending(false);
      });
  }, []);

  return (
    <>
      {ispending && (
        <div style={{
          width:"100%"
        }} >
          <Typography variant="h1" color="black" textAlign={"center"}>
            Loading...
          </Typography>
        </div>
      )}
      {cart.map((carts) => (
        <Grid item md={3}>
          <Card className={classes.root} key={carts.id}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {carts.name[0].toUpperCase()}
                </Avatar>
              }
              title={carts.name}
            />
            <CardContent>
              <Typography component="i">from</Typography>
              <Typography variant="h4">
                {carts.start} <ArrowRightAlt /> {carts.stop}
              </Typography>
              <Typography color="primary">{carts.date}</Typography>
              <Typography>{carts.time} hours</Typography>
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
