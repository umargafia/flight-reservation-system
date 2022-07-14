import { Grid, GridListTile, makeStyles, Typography } from '@material-ui/core'
import { Card, Paper } from '@mui/material'
import React from 'react'
import FlightCart from '../HomeCompanents/FlightCart'


const useStyles = makeStyles({
        mainCard: {
                margin: 20,
                padding: 10,
                
               
                
        }
})


const AvailableFlight = () => {
        const classes = useStyles();
        return (
                <Card className={classes.mainCard} elevation={10} >
                        <Typography >
                                Available Flight
                        </Typography>
                        <Grid container>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid >
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid><Grid item md={3}>

                                        <FlightCart />
                                </Grid><Grid item md={3}>
                                        
                                        <FlightCart />
                                </Grid>
                                <Grid item md={3}>

                                        <FlightCart />
                                </Grid>
                        </Grid>
                </Card>
        )
}

export default AvailableFlight