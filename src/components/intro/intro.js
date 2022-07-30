import React from "react";
import "./intro.css"
import CV from "../../images/cv.pdf";
import Github from "../../images/git.png";
import LinkedIn from "../../images/ing.png";
import Instagram from "../../images/linkedin.png";
import MyImg from "../../images/my.jpeg";

export const Intro = () => {
  return (
    <div className="intro" id="home">
       <div className="intro-left">
            <div className="intro-name">
                <span>Hello! Iam</span>
                <span>Sanjeevraj.M</span>
                <hr/>
                <span>Software Engineer Intern with high skill 
                    in Java programming,<br></br>
                    web development and android 
                    mobile app development</span>
                <hr/>
            </div>
            <button className="btn intro-btn" ><a href={CV} download>Download CV</a></button>
            <div className="icons">
                <a href="#"><img src={Github} /></a>
                <a href="#"><img src={LinkedIn} /></a>
                <a href="#"><img src={Instagram} /></a>
            </div>   
        </div>
        <div className="intro-right">
            <img src={MyImg} />
        </div>

    </div>
  )
}

export default Intro;
