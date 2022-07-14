import { makeStyles } from '@material-ui/core'
import { AdminPanelSettings } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  logout: {
    marginLeft: "75%",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: 30
  },
});

const ANav = () => {
  const classes = useStyle()
  return (
    <AppBar >
      <Toolbar style={{
        background: "darkBlue"
      }}>
        <Typography variant="h5" color="inherit">
          <AdminPanelSettings />
          Admin Dashboard
        </Typography>

        <Link to={"/"} className={classes.logout}>Logout</Link>

      </Toolbar>




    </AppBar>
  )
}

export default ANav

