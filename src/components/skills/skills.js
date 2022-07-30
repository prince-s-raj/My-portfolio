import React from 'react'
import "./skills.css"

const skills = () => {

  return (
    <div className='skill-section'>
        <h1 className='heading'>Skills</h1>
        <div className="skill">
            <div className='s-card'>
                <div className='header'>
                  <h3>Front End Development</h3>
                </div>
                <ul>
                  <li>HTML</li><progress value="90" max="100"/>
                  <li>CSS</li><progress value="90" max="100"/>
                  <li>Bootsrap</li><progress value="70" max="100"/>
                  <li>Javascript</li><progress value="60" max="100"/>
                  <li>React Js</li><progress value="70" max="100"/>
                  <li>Angular js</li><progress value="30" max="100"/>
                  <li>Git</li><progress value="40" max="100"/>
                </ul>
            </div>
            <div className='s-card'>
                <div className='header'>
                   <h3>Back End Development</h3>
                </div>
                <ul>
                  <li>Java</li><progress value="60" max="100"/>
                  <li>C#</li><progress value="40" max="100"/>
                  <li>Node js</li><progress value="60" max="100"/>
                  <li>Android Studio</li><progress value="60" max="100"/>
                  <li>Firebase</li><progress value="40" max="100"/>
                  <li>MySQL</li><progress value="50" max="100"/>
                  <li>Mongo DB</li><progress value="40" max="100"/>
                </ul>
    
            </div>


        </div>

      
        </div>
  )
}



export default skills;
