import { makeStyles } from "@material-ui/core";
import { TextField as MyTextField } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  input: {
    marginTop: "20px",
  },
});

function LoginTextField({ typ, varian, text }) {
  const classes = useStyles();
  return (
    <MyTextField
      type={typ}
      margin="dense"
      label={text}
      variant={varian}
      className={classes.input}
      fullWidth
    />
  );
}

export default LoginTextField;
