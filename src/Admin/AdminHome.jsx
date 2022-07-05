import { Container as div } from '@mui/material'
import React from 'react'
import SearchArea from '../user/FlightCompanents/SearchArea'
import ANav from './ANav'

const AdminHome = () => {
  return (
    <div>
      <ANav />
      <SearchArea />
      
    </div>
  )
}

export default AdminHome