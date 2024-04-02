import React from 'react'
import { FirstNavbar } from './FirstNavbar'
import { SecondNav } from './SecondNav'
import { SellerTools } from './SellerTools'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
        <FirstNavbar/>
        <SecondNav/>
        <SellerTools/>
        <Footer/>
    </div>
  )
}

export default Body