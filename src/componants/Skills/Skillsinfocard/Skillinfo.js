import React from 'react';
import "./skillinfo.css"

const Skillinfo = ({heading, Skills}) => {
  return (
    <div className='skill-info-card'>
        <h6>{heading}</h6>
        <div className='skills-info-content'>
            {Skills.map((item, index)=>(
                <React.Fragment key={`skill_${index}`}>
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className='skill-progress-bg'>
                        <div className='skill-progress' style={{width : item.percentage}}></div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default Skillinfo