import React from 'react'
import Navbar from '../Components/Navbar';
import FirstBox from '../Components/FirstBox';
import Footer from '../Components/Footer';
import Category from '../Components/Category';
import BestSellers from '../Components/BestSellers';
import Banner from '../Components/Banner';
import FollowUs from '../Components/FollowUs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <FirstBox/>
        <Category/>
        <BestSellers/>
        <Banner/>
        <FollowUs/>
        <Footer/>
    </div>
  )
}

export default Home