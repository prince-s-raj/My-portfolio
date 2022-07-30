import React from 'react'
import "./navBar.css"
const navBar = () => {
  return (
    <div className='navbar'>
        <div className='nb-left'>
            <div className='nb-name'>prince sanjeev</div>
            <span>Toggel</span>
        </div>
        <div className='nb-right'>
            <div className='nb-list'>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skill</li>
                    <li>Certificates</li>
                </ul>
            </div>
            <input type="button" className='btn nb-btn' value="Contact us"/>
        </div>
    </div>
  )
}

export default navBar