import React, { useEffect, useState } from "react";
import MyLoading from "../GeneralCompanents/MyLoading.jsx";
import Axios from "axios";
import { MyPort } from "../App.js";
import { GetCart } from "./GetCart.jsx";
import { makeStyles } from "@material-ui/core";

function ACard() {
  const [ispending, setpending] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    createConnection();
  }, []);

  const createConnection = () => {
    Axios.get(`http://localhost:${MyPort}/adminHome`).then((data) => {
      setCart(data.data);
      setpending(false);
    });
  };

  return (
    <>
      {console.log(cart)}
      {ispending && <MyLoading />}
      {GetCart(cart, createConnection)}
    </>
  );
}

export default ACard;
