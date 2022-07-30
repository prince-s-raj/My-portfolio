import React from 'react'
import "./about.css"

const about = () => {
  return (
    <div className='about-section'>
      <h1>About</h1>
      <div className='f-wrap'>
        <div className='l-about'>
              <span>Get In Touch</span>
              <span>Contact Me</span>
        </div>
        <div className='r-about'>
          
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <textarea placeholder='Type anything here'></textarea>
            <button type="button" value="Submit" className='btn about-btn'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default about;