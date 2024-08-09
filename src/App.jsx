
// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero_Banner from './Components/Hero_Banner/Hero_Banner';
import Explore_Menu from './Components/Explore_Menu/Explore_Menu';
import Featured_Product from './Components/Featured_Product/Featured_Product';
function App() {

  return (
    <>
      <Navbar />
      <Hero_Banner />
      <Explore_Menu />
      <Featured_Product />
    </>
  )
}

export default App
