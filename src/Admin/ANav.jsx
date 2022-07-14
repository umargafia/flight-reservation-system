import { makeStyles, Modal } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AdminPanelSettings } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginTextField from "../GeneralCompanents/LoginTextField";
import MyButton from "../user/loginCompanents/MyButton";

const useStyle = makeStyles({
  logout: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: 30,
    "&:hover": {
      fontSize: "23px",
    },
  },
  container: {
    width: "500px",
    height: 550,
    position: "absolute",
    top: 0,
    buttom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  navDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ANav = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
 const buttonStyle = {
   marginTop: "10px",
   fontWeight: "bold",
   background: "red",
 };
  return (
    <>
      <AppBar>
        <Toolbar
          style={{
            background: "darkBlue",
          }}
        >
          <div className={classes.navDiv}>
            <Typography variant="h5" color="inherit">
              <AdminPanelSettings />
              Admin Dashboard
            </Typography>

            <Button
              onClick={() => setOpen(true)}
              style={{
                color: "white",
                fontWeight: "bolder",
              
              }}
            >
              <Add color="action" />
              Add
            </Button>
            <Link to={"/"} className={classes.logout}>
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Modal open={open} className={classes.container}>
        <Container className="login-container">
          <center>
            <Typography
              color={"rgb(74, 153, 218)"}
              fontWeight={"700"}
              fontSize="70px"
              fontFamily={"sans-serif"}
              paddingTop={"8%"}
            >
              Add Flight
            </Typography>
            <form className="login-span">
              <Button
                variant="contained"
                size="large"
                fullWidth
                style={buttonStyle}
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </form>
          </center>
        </Container>
      </Modal>
    </>
  );
};

export default ANav;
