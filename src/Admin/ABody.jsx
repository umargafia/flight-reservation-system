import { makeStyles } from '@material-ui/core';
import { Avatar, Card, CardHeader } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'


const blueButtonColor = "rgb(6, 6, 49)";

const useStyles = makeStyles({
        root: {
                minWidth: 300,
                maxWidth: 500,
                background: blueButtonColor,
                margin: "20px",
                marginLeft: "0px",
                color:"black"
        },
        avatar: {
                background: "gray"
        },



});


const ABody = () => {
        const classes = useStyles()
        return (
                <div>
                        <Card className={classes.root}>
                                <CardHeader
                                        avatar={
                                                <Avatar className={classes.avatar}>C</Avatar>

                                        }
                                        title="Flight Name"


                                />
                        </Card>
                </div>
        )
}

export default ABody