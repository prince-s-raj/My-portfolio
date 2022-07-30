import React from 'react'
import Card  from '../card/card';
import "./project.css";
import BMS from "../../images/bms.jpg"
import MyImage from "../../images/bms.jpg"
import Portfolio from "../../images/port.webp"
import Zomato from "../../images/zomato.webp"

export const project = () => {
  return (
    <div className='project-section' id='project'>
        <h1>My Projects</h1>
        <div className='p-card'>
            <div>
            <Card
                image = {BMS}
                heading = {"Book My Show Clone"}
                details = {"This is my book my show clone project"}
                />
            </div>
            <div>
            <Card
                image = {Portfolio}
                heading = {"Portfolio"}
                details = {"This is my book my show clone project"}
                />
            </div>
            <div>
            <Card
                image = {Zomato}
                heading = {"Zomato Landing Page"}
                details = {"This is my book my show clone project"}
                />
            </div>
            <div>
            <Card
                image = {MyImage}
                heading = {"Book API"}
                details = {"This is my book my show clone project"}
                />
            </div>
        </div>
        <p className='projects-intro'>I did some projects to develop my skills</p>
    </div>
  )
}



export default project;