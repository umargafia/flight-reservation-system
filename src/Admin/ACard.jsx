import {
  Card,
  makeStyles,
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import {
  ArrowRightAlt,
  ArrowRightSharp,
  DeleteOutline,
  DeleteSharp,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const blueButtonColor = "rgb(6, 6, 49)";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
    backgroundColor: blueButtonColor,
    margin: "20px",
    marginLeft: "20px",
  },
  avatar: {
    background: "gray",
  },
  priceName: {
    color: "gray",
  },
  deleteButton: {},
});
function ACard() {
  const classes = useStyles();
  const [ispending, setpending] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setpending(false);
      });
  }, []);

  const handleDeleate = async (id) => {
    await fetch(`http://localhost:8000/cart/${id}`, {
      method: "DELETE",
    });
    const newCart = cart.filter((cart) => cart.id != id);
    setCart(newCart);
  };

  return (
    <>
      {ispending && (
        <div
          style={{
            width: "100%",
          }}
        >
          <Typography variant="h1" color="black" textAlign={"center"}>
            Loading...
          </Typography>
        </div>
      )}
      {cart.map((carts) => (
        <Grid item md={3} key={carts.id}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {carts.name[0].toUpperCase()}
                </Avatar>
              }
              title={carts.name}
              action={
                <IconButton onClick={() => handleDeleate(carts.id)}>
                  <DeleteOutline />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="i">From</Typography>
              <Typography variant="h4">
                {carts.start} <ArrowRightAlt /> {carts.stop}
              </Typography>
              <Typography color="primary">{carts.date}</Typography>
              <Typography>{carts.time} Hours</Typography>
              <Typography className={classes.priceName}>
                ₦{carts.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.bookNowButton}>
                Update
              </Button>
              <Link to={"/vieworder"}>
                <Button size="small">
                  orders 10
                  <ArrowRightSharp />
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default ACard;
