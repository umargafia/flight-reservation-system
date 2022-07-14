import React from 'react'
import MyText, { MyHeaderText } from '../../GeneralCompanents/MyText'
import { makeStyles } from '@material-ui/core'
import { Card, Container, Typography } from '@mui/material'



const useStyle = makeStyles({
        mainContainer: {
                marginTop: "20px",

        },

})


const myStyle = {
        display: "flex",
        margin: "20px"
}
const Details = ({sucessText}) => {
        const classes = useStyle()
        return (
                <Card className={classes.mainContainer} elevation={10} >
                        
                        <Typography color={"green"} padding={"10px"} >{ sucessText}</Typography>
                        <MyHeaderText text="Confirm Details" />
                        <div style={myStyle} >
                                <Container>
                                        <MyText textName="Flight Number" textValue="um123" />
                                        <MyText textName="Travel" textValue={` ${"Katsina"} to ${"Abuja"}`} />
                                        <MyText textName="Time" textValue="11:00 AM" />
                                        <MyText textName="Airport Name" textValue="Katsina state Airport" />
                                </Container>
                                <Container className={classes.leftContainer} >
                                        <MyText textName="Flight Name" textValue="nigerian Airline" />
                                        <MyText textName="Date" textValue="01/01/2022" />
                                        <MyText textName="Travel Duration" textValue="1 hour" />
                                        <MyText textName="Ticket Price" textValue="₦150" />
                                </Container>


                        </div>
                      
                                <MyHeaderText text="Your Details" />
                                
                       


                        <div className='paymentDiv' style={myStyle}>
                                <Container>
                                        <MyText textName="Name" textValue="Umar Faruk Musa" />
                                        <MyText textName="Email" textValue="Umargafia@gmail.com" />
                                        <MyText textName="No ofperson" textValue="1" />
                                        <MyText textName="Final Amount" textValue="₦150" />
                                </Container>
                                <Container className={classes.leftContainer} >
                                        <MyText textName="Contact number" textValue="09039513111" />
                                        <MyText textName="Address" textValue="My address" />
                                        <MyText textName="Number of Adults +18" textValue="1" />
                                        <MyText textName="Number of Adults -18" textValue="1" />

                                </Container>
                        </div>
                </Card>
        )
}

export default Details