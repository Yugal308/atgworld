import React from 'react'
import "./banner.css"
import banner_image from "../Assets/banner_image.png"

const Banner = () => {
  return (
    <div className="banner">
        <img src={banner_image} alt="banner" className='banner_image'/>
        <div className="image">
        </div>
        <div className="banner_text">
            <p className="banner_title">Computer Engineering</p>
            <p className="banner_desc">142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}

export default Banner