import { Card, IconButton, makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ACard from './ACard'



const useStyles = makeStyles({
        mainCard: {
                margin: 20,
                padding: 10,



        }
})



const ABody = () => {
        const classes = useStyles();
        return (
                <Card className={classes.mainCard} elevation={10}>
                <div style={{
                        color:"black"
                }}>
                <Typography>Flight</Typography>
                <Button > Add <Add color='primary' fontSize='30px' /> </Button>
                </div>
                        <Grid container >

                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                                <Grid item md={3}>
                                        <ACard />
                                </Grid>
                        </Grid>
                </Card>
        )
}

export default ABody

