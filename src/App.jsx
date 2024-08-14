
// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero_Banner from './Components/Hero_Banner/Hero_Banner';
import Explore_Menu from './Components/Explore_Menu/Explore_Menu';
import Featured_Product from './Components/Featured_Product/Featured_Product';
import Offer_Banner from './Components/Offer_Banner/Offer_Banner';
import Offers from './Components/Offers/Offers'


function App() {

  return (
    <>
      <Navbar />
      <Hero_Banner />
      <Explore_Menu />
      <Featured_Product />
      <Offer_Banner />
      <Offers />
    </>
  )
}

export default App
