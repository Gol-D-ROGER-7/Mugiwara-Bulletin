import React from 'react'
import Fimg from '../../images/frog.png'
import './News.css'

const News = () => {
  return (
    <>
      <div className="title-container">
        <h1>------------Latest <img className='fimg' src={Fimg} alt="img"  /> News-----------</h1>
      </div>
    </>
  )
}

export default News
