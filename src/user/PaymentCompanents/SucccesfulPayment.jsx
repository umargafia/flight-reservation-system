import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ViewMoreButton from '../../GeneralCompanents/Viewmore'
import Details from './Details'

const SucccesfulPayment = () => {
  return (
          <Container style={{
                  marginTop:"100px"
          }} >
                  <Details sucessText={"Flight Is Booked Successfully!"} />
                  <Link to={"/"}>  <ViewMoreButton text={"Close"} /></Link>
          </Container>
  )
}

export default SucccesfulPayment