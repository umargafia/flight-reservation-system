import { Card, makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import React from "react";
import ACard from "./ACard";

const useStyles = makeStyles({
  mainCard: {
    margin: 20,
    padding: 10,
    marginTop: "100px",
  },
});

const ABody = () => {
  const classes = useStyles();
  return (
    <Card className={classes.mainCard} elevation={10}>
      <div
        style={{
          color: "black",
        
        }}
      >
        <Typography>Flight</Typography>
      </div>
      <Grid container>
       
          <ACard />
        </Grid>
      
    </Card>
  );
};

export default ABody;
