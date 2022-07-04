import {  Paper, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import SearchArea from './SearchArea'
import Nav from '../HomeCompanents/Nav'
import AvailableFlight from './AvailableFlight'
import { makeStyles } from '@material-ui/core'
import Footer from '../HomeCompanents/Footer'

const useStyles = makeStyles({

})


const Flight = () => {
        const classes = useStyles();
        return (
                <span className='flightDiv' >
                        <Nav color="rgb(6, 6, 49)" />
                        <SearchArea />
                        <AvailableFlight />
                        <Footer/>
                </span>

        )
}

export default Flight