import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import LoginTextField from "../GeneralCompanents/LoginTextField";
import MyButton from "../user/loginCompanents/MyButton";
import Axios from "axios";
import { MyPort } from "../App";
import { AdminCartId } from "../Contexts";

const AForm = () => {
  const [name, setName] = useState("");
  const [start, setDepature] = useState("");
  const [stop, setArival] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const handleEvent = (e) => {
    e.preventDefault();

    if (name && start && stop && date && time && price && hours) {
      postData();
    }
  };

  const postData = () => {
    Axios.post(`http://localhost:${MyPort}/adminHome`, {
      flightName: name,
      start: start,
      stop: stop,
      date: date,
      hours: hours,
      price: price,
      time: time,
    }).then(() => window.location.reload());
  };

  return (
    <form noValidate autoCapitalize="off">
      <LoginTextField
        text={"Flight name"}
        change={(e) => setName(e.target.value)}
      />
      <LoginTextField
        text={"Departure"}
        change={(e) => setDepature(e.target.value)}
      />
      <LoginTextField
        text={"Arrival"}
        change={(e) => setArival(e.target.value)}
      />
      <LoginTextField
        text="Date"
        typ={"date"}
        change={(e) => setDate(e.target.value)}
      />
      <LoginTextField
        text="Hours"
        typ={"number"}
        change={(e) => setHours(e.target.value)}
      />
      <LoginTextField
        text="Time"
        typ="time"
        change={(e) => setTime(e.target.value)}
      />
      <LoginTextField
        text={"Price"}
        typ="number"
        change={(e) => setPrice(e.target.value)}
      />
      <MyButton text="Add flight" onTap={(e) => handleEvent(e)} />
    </form>
  );
};

export default AForm;
