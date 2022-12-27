import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import OurProviders from './Pages/OurProviders/OurProviders';
function RoutesLinks() {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/provider/:id" element={<OurProviders />}/>


    </Routes>
  )
}

export default RoutesLinks
