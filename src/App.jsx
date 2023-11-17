import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import Fimg from './images/frog.png';
import News from './components/news/News'
import CoinSlider from './components/coins-carousel/CoinSlider'

function App() {

  return (
    <>
    <div className="wrapper">
      {/* <img className='fimg' src={Fimg} alt="img" height={500} width={600} /> */}
      <Navbar />
      <CoinSlider />
      {/* <News /> */}
    </div>
    </>
  )
}

export default App
