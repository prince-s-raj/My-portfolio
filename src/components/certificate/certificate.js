import React from 'react'
import "./certificate.css"
import Education from "../../images/edu.png";
import Certificate from "../../images/cert.png";
import Interest from "../../images/int.png";
const certificate = () => {
  return (
    <div className='cert-section'>
      <h1>Education</h1>
      <div className='c-wrap'>
        <div className='c-left'>
            <div className="c-icons">
                <a href="#"><img src={Education} /></a>
                <a href="#"><img src={Certificate} /></a>
                <a href="#"><img src={Interest} /></a>
            </div>  
        </div>
        <div className='c-right'>
                right
        </div>
      </div>
    </div>
  )
}

export default certificate;