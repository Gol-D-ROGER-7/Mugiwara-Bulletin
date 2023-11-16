import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import Fimg from './images/frog.png';
import CoinCarousel from './components/coins-carousel/CoinCarousel'
import News from './components/news/News'

function App() {

  return (
    <>
    <div className="wrapper">
      {/* <img className='fimg' src={Fimg} alt="img" height={500} width={600} /> */}
      <Navbar />
      <CoinCarousel />
      <News />
    </div>
    </>
  )
}

export default App
