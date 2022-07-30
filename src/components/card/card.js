import React from 'react'
import "./card.css";

const card = ({...props}) => {
  return (
    <div className='card'>
        <img src={props.image} alt='' />
        <div className='card-detail'>
            <span>{props.heading}</span>
            <span>{props.details}</span>
        </div>
    </div>
  )
}
export default card;
