import React from 'react'
import Artist from '../Img/artist.jpg'
import Check from '../Img/check.png'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" src={Artist} alt="Artist" />

      <div className="content">
        <div className="breadCrump">
          <p>Home <span>/Popular Artist</span></p>
          <i><FaEllipsisH /></i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Metallica</h2>
              <img src={Check} alt="check" />
            </div>
            <p>
              <i><FaHeadphones /></i>
              11,218,1122 <span>monthly lzisteners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i><FaCheck /></i>
              Following
            </a>
          </div>
        </div>


      </div>
      <div className="bottomLayer"></div>
    </div>
  )
}

export default Banner