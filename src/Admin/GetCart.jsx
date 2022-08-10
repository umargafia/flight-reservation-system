import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Avatar,
  makeStyles,
  Modal,
  Container,
} from "@material-ui/core";
import "../user/loginCompanents/Login.css";
import {
  ArrowRightAlt,
  ArrowRightSharp,
  DeleteOutline,
} from "@mui/icons-material";
import Axios from "axios";
import { Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MyText, { MyHeaderText } from "../GeneralCompanents/MyText.jsx";
import { MyPort } from "../App.js";
import { useContext, useState } from "react";
import LoginTextField from "../GeneralCompanents/LoginTextField.jsx";
import MyButton from "../user/loginCompanents/MyButton.jsx";
import AForm, { UpdateForm } from "./AForm.jsx";
import { Update } from "@material-ui/icons";
import { AdminCartId } from "../Contexts";
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
  container: {
    width: "500px",
    height: 550,
    position: "absolute",
    top: 0,
    buttom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
});

export function GetCart(cart, createConnection) {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleDeleate = (id) => {
    Axios.delete(`http://localhost:${MyPort}/adminHome/${id}`).then((res) => {
      if (res.status === 200) {
        createConnection();
      }
    });
  };
  const style = {
    appBar: {
      background: "transparent",
      height: "80px",
    },
    buttonStyle: {
      marginTop: "10px",
      fontWeight: "bold",
      background: "red",
    },
  };

  const classes = useStyles();
  return cart.map((carts) => (
    <div key={carts.flight_id}>
      <Grid item md={3}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {carts.flight_name[0].toUpperCase()}
              </Avatar>
            }
            title={carts.flight_name}
            action={
              <IconButton onClick={() => handleDeleate(carts.flight_id)}>
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
            <Typography>{carts.hours} Hours</Typography>
            <Typography className={classes.priceName}>
              ₦{carts.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/vieworder"}>
              <Button size="small">
                orders 10
                <ArrowRightSharp />
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </div>
  ));
}
