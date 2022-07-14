
import { Button } from "@mui/material";
import React from "react";


function MyButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        background: props.bg,
      }}
      onClick={() => props.onTap}
    >
      {props.text}
    </Button>
  );
}

export default MyButton;
