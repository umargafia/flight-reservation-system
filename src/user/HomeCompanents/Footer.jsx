import { makeStyles } from '@material-ui/core';
import {  Typography } from '@mui/material';
import React from 'react'

const myBlue = "rgb(6, 6, 49)"
const useStyles = makeStyles({
  footer: {
    height: "200px",
    backgroundColor: myBlue,
    marginTop:"20px"
  },
  copyrightText: {
    fontSize: "20px",
    paddingTop:"170px"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer } >
      <center>
        <Typography className={classes.copyrightText} >
          &#169;copyright { new Date().getFullYear( ) }
        </Typography>
     </center>
    </footer>
  )
}

export default Footer