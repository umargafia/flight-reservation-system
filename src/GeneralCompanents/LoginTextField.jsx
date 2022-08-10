import { makeStyles } from "@material-ui/core";
import { TextField as MyTextField } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  input: {
    marginTop: "20px",
  },
});

function LoginTextField({ typ, varian, text, change, error,value }) {
  const classes = useStyles();
  return (
    <MyTextField
      error={error}
      type={typ}
      margin="dense"
      label={text}
      variant={varian}
      className={classes.input}
      onChange={change}
      fullWidth
      value={value}
    />
  );
}

export default LoginTextField;
