import React from 'react';
import "./Skillcard.css"

const Skillcard = ({iconUrl,isActive,title, onClick}) => {
  return (
    <div className={`skills-card ${isActive} ? "active" : ""`} onClick={()=>onClick()}>
        <div className='skill-icon'>
            <img src={iconUrl} alt={title}/>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Skillcard