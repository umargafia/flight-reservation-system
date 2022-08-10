import { Container as div } from "@mui/material";
import React from "react";
import SearchArea from "../user/FlightCompanents/SearchArea";
import ABody from "./ABody";
import ANav from "./ANav";

const AdminHome = () => {
  return (
    <div>
      <ANav />
      <ABody />
    </div>
  );
};

export default AdminHome;
