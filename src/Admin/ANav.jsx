import { makeStyles, Modal } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AdminPanelSettings } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AForm from "./Form";

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
    position: "absolute",
    top: 10,
    buttom: 10,
    left: 0,
    right: 0,
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
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
              color="blue"
              fontWeight={"700"}
              fontSize="70px"
              fontFamily={"sans-serif"}
              paddingTop={"8%"}
            >
              Add Flight
            </Typography>
            <form>
              <AForm />
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
