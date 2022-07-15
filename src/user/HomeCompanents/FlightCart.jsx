import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowRightAlt } from "@mui/icons-material";
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
  const bull = <span className={classes.bullet}>•</span>;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return cart.map((carts) => (
    <Grid item md={3}>
      <Card className={classes.root} key={carts.id}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>C</Avatar>}
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
          <Typography className={classes.priceName}>₦{carts.price}</Typography>
        </CardActions>
      </Card>
    </Grid>
  ));
}

export default FlightCart;
