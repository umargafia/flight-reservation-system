import { Button } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function MyButton({ bg, onTap, text }) {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      type='submit'
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        background: bg,
      }}
      onClick={onTap}
    >
      {text}
    </Button>
  );
}

export default MyButton;
