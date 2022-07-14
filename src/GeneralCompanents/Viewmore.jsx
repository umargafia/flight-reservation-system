import { makeStyles } from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({});

function ViewMoreButton({ text, onclick }) {
  const classes = useStyles();
  return (
    <button className="joinus-button" onClick={onclick}>
      <span> {text}</span>
    </button>
  );
}

function ViewMoreArrows() {
  return (
    <Link to="/flight">
      <button className="arrow">
        <span>&#187;</span>
      </button>
    </Link>
  );
}

export default ViewMoreButton;
export { ViewMoreArrows };
