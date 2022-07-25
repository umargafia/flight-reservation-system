import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Avatar,
  makeStyles,
} from "@material-ui/core";
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

export function GetCart(cart, createConnection) {
  const navigate = useNavigate();
  const handleDeleate = (id) => {
    Axios.delete(`http://localhost:${MyPort}/adminHome/${id}`).then((res) => {
      if (res.status === 200) {
        createConnection()      
      }
    });
  };

  const classes = useStyles();
  return cart.map((carts) => (
    <Grid item md={3} key={carts.flight_id}>
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
          <Typography className={classes.priceName}>₦{carts.price}</Typography>
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
  ));
}
