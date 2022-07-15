import { Grid, GridListTile, makeStyles, Typography } from "@material-ui/core";
import { Card, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import FlightCart from "../HomeCompanents/FlightCart";

const useStyles = makeStyles({
  mainCard: {
    margin: 20,
    padding: 10,
  },
});

const AvailableFlight = () => {
  const classes = useStyles();

  return (
    <Card className={classes.mainCard} elevation={10}>
      <Typography>Available Flight</Typography>
      <Grid container>
        <FlightCart />
      </Grid>
    </Card>
  );
};

export default AvailableFlight;
