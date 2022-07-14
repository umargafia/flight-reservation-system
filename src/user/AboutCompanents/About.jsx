import { makeStyles } from '@material-ui/core';
import { Card, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer from '../HomeCompanents/Footer';
import Nav from '../HomeCompanents/Nav'


const useStyles = makeStyles({

        about: {
                color: "black",
                textAlign: "center",
                paddingTop: "90px"

        },
        allText: {
                color: "black",
                padding: 20,
                textAlign: "center"
        },
        textColor: {
                color: "black",
                padding: 10,
                textAlign: "center",
                paddingTop:"2%"
        },
        myCard: {
                marginLeft: "-17%",
                marginRight: "-17%",
                height:"500px"
        }

});


const About = () => {
        const classes = useStyles();
        return (
                <>
                <Container>
                        <Nav color="black" />
                        <Typography className={classes.about} variant="h2">
                                About us
                        </Typography>
                        <Card className={classes.myCard} elevation={10} >
                                {/* <Typography variant='h4' className={classes.allText} >
                                        Header
                                </Typography> */}
                                <Typography className={classes.textColor}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!
                                </Typography>
                                <Typography className={classes.textColor}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!
                                </Typography>
                                <Typography className={classes.textColor}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem voluptates corporis ratione, voluptatum explicabo quaerat, doloribus sint quisquam repellat temporibus laudantium rem ipsam quod. Asperiores minima commodi quia facere!
                                </Typography>

                        </Card>
                        
                        </Container>
                        <Footer />
                </>
        )
}

export default About