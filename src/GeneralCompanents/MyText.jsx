import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  main: {
    display: "flex",
  },

  taxtName: {
    color: "black",

    paddingBottom: 8,
  },
  textValue: {
    color: "gray",

    paddingButtom: 8,
  },
  header: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
});
const MyText = ({ textValue, textName }) => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Typography className={classes.taxtName}>{textName}:</Typography>

      <Typography className={classes.textValue}>{textValue}</Typography>
    </Container>
  );
};

const MyHeaderText = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.header}>
      {text}
    </Typography>
  );
};

export { MyHeaderText };
export default MyText;
