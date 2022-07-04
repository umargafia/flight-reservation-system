import React from 'react'
import Nav from '../HomeCompanents/Nav'
import Intro from '../HomeCompanents/Intro'
import Join from '../HomeCompanents/Join'
import FlightCart from '../HomeCompanents/FlightCart'
import { ViewMoreArrows } from '../HomeCompanents/Viewmore'
import { Typography } from '@mui/material'
import Footer from '../HomeCompanents/Footer'

function Home() {

        return (
                <span>
                        <div className='mainHome' >
                                <Nav />
                                <Intro />
                                <Join />

                        </div>
                        <h1 className='available-flight-text'>Available flights</h1>
                        <div className='home-book-flight'  >
                                

                                        <div className='home-book-flight  cardDiv' >
                                                <FlightCart />
                                                <FlightCart />
                                                <FlightCart />
                                                <FlightCart />
                                                <FlightCart />
                                        </div>

                                        <div>
                                                <ViewMoreArrows/>
                                        </div>
                
                        </div>
                        <Footer/>


                </span>
        )

}

export default Home