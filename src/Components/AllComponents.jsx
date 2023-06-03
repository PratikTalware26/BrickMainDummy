import React from 'react'
import ResidentialProperties from './ResidentialProperties'
import Navbar from './Navbar'
import Home from './Home'
import homeBuyerImg from "../assets/brickf strip1.png"
import CuratedCollection from './CuratedCollection'
import InvestmentProperty from './InvestmentProperty'
import Brands from './Brands'
import Footer from './Footer'

const AllComponents = () => {
  return (
    <div className='nav-home-cont'>
        <Navbar/>
        <Home/>
        <ResidentialProperties/>
        <div className='home-buyer-img'>
            <img src={homeBuyerImg} alt="" className='w-100 h-100'/>
        </div>
        <CuratedCollection/>
        <InvestmentProperty/>
        <Brands/>
        <Footer/>
    </div>
  )
}

export default AllComponents