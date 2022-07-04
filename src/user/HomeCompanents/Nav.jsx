import React, { useState } from 'react'
import { AppBar, Button, Typography } from '@mui/material'
import { makeStyles, Modal } from '@material-ui/core';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom'
import "../loginCompanents/Login.css"
import MyButton from '../loginCompanents/MyButton';
import NavButton from '../../GeneralCompanents/NavButton';
import LoginTextField from '../../GeneralCompanents/LoginTextField';


const useStyles = makeStyles((theme) => ({



        container: {
                width: "500px",
                height: 550,
                position: "absolute",
                top: 0,
                buttom: 0,
                left: 0,
                right: 0,
                margin: "auto",

        }
})
);


var sopen;


function Nav(p) {
        const classes = useStyles();
        const [open, setOpen] = useState(false);

        const style = {

                appbar: {
                        background: "transparent",
                        height: "80px"
                },

        }

        return (
                <>
                        <AppBar style={style.appbar} className="myAppbar" position="absolute">
                                <div className='ulDiv' >
                                        <div style={style.ul} className="ulpc">

                                                <Link to="/"> <NavButton text="Home" color={p.color} /></Link>
                                                <Link to="/aboutus"> <NavButton text="About us" color={p.color} /></Link>
                                                <Link to="/flight"> <NavButton text=" Flight" color={p.color} /></Link>
                                                <NavButton text="Login" onClick={() => setOpen(true)} color={p.color} />

                                        </div>
                                        {/* <ul style={style.ulIcons} cl>LassName="ulmb">
                                        <li className='list->L3'> <HomeIcon fontSize='large' /> </li>
                                        <li className='list-3'> <Flight /></li>
                                        <li className='list-3'><InfoOutlined /> </li>
                                        <li className='li4'><Login /></li>
                                </ul> */}
                                </div>

                        </AppBar>
                        <Modal open={open} className={classes.container} >
                                <Container className='login-container' >

                                        <center>
                                                <Typography
                                                        color={"rgb(74, 153, 218)"}
                                                        fontWeight={"700"}
                                                        fontSize="70px"
                                                        fontFamily={"sans-serif"}
                                                        paddingTop={"8%"}
                                                >

                                                        Login
                                                </Typography>
                                                <form className='login-span'>
                                                        <LoginTextField text="Email" />
                                                        <LoginTextField typ="password" text="Password" />
                                                        <MyButton text="Login" />
                                                        <MyButton text="Forgot password" />

                                                        <Link to='/' >


                                                                <Button
                                                                        variant="contained"
                                                                        size="large"
                                                                        fullWidth
                                                                        style={
                                                                                {
                                                                                        marginTop: "10px",
                                                                                        fontWeight: "bold",
                                                                                        background: "red",
                                                                                }
                                                                        }
                                                                        onClick={() => setOpen(false)}

                                                                >
                                                                        Close</Button>

                                                        </Link>
                                                </form>
                                        </center>

                                </Container>
                        </Modal>
                </>)
}


export default Nav;

