
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import { ArrowRightAlt} from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';


const blueButtonColor = "rgb(6, 6, 49)";

const useStyles = makeStyles({
        root: {
                minWidth: 300,
                maxWidth: 500,
                background: blueButtonColor,
                margin: "20px",
                marginLeft: "0px"
        },
        avatar: {
                background: "gray"
        },



});

function FlightCart() {

        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;
        return (
                <Card className={classes.root}  >

                        <CardHeader
                                avatar={
                                        <Avatar className={classes.avatar}>C</Avatar>

                                }
                                title="Flight Name"


                        />

                        <CardContent>
                                <Typography component="i">
                                        From
                                </Typography>
                                <Typography variant='h4' >
                                        Start <ArrowRightAlt /> Stop
                                </Typography>
                                <Typography color="primary" >
                                        13 july 2020
                                </Typography>
                                <Typography>
                                        3 hours
                                </Typography>

                        </CardContent>
                        <CardActions>
                                <Link to={"/bookFlight"} ><Button size="small" className={classes.bookNowButton} >Book now</Button></Link>
                                <Typography className={classes.priceName} >₦30,00</Typography>
                        </CardActions>
                </Card>
        )

}

export default FlightCart