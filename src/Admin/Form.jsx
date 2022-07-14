import React from "react";
import LoginTextField from "../GeneralCompanents/LoginTextField";
import MyButton from "../user/loginCompanents/MyButton";

const AForm = () => {
  return (
    <>
      <LoginTextField text={"Flight name"} />
      <LoginTextField text={"Departure"} />
      <LoginTextField text={"Arrival"} />
      <LoginTextField text="Date" typ={"date"} />
      <LoginTextField text="Hours" typ={"number"} />
      <LoginTextField text={"Price"} typ="number" />
      <MyButton text="Add flight" />
    </>
  );
};

export default AForm;
