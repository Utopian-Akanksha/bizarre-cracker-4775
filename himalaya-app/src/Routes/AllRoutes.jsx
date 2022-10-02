import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import Supplement from './Supplement';

const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/supplements" element={<Supplement/>} />
         <Route path="/signin" element={<SignIn/>} />
         <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default AllRoutes