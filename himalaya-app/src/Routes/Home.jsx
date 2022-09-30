import React from 'react'
import Navbar from '../Components/Navbar';
import FirstBox from '../Components/FirstBox';
import Footer from '../Components/Footer';
import Category from '../Components/Category';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <FirstBox/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Home