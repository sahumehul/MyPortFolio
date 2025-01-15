import React, { useState } from 'react';
import "./skill.css"
import Skillcard from './skillcard/Skillcard';
import { SKILLS } from '../../utils/data';
import Skillinfo from './Skillsinfocard/Skillinfo';

const Skill = () => {

    const [selectedSkill, setSelectedskill] = useState(SKILLS[0]);

    const handleSelectedSkill =(data)=>{
        setSelectedskill(data)
    }
  return (
    <section className='skill-container'  id="skills">
        <h5>Technical proficiency</h5>
        <div className='skill-content'>
            <div className='skills'>
                {SKILLS.map((item)=>(
                    <Skillcard key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>{handleSelectedSkill(item)}}
                     />
                ))}
            </div>
            <div className='skills-info'>
                <Skillinfo 
                heading = {selectedSkill.title}
                Skills = {selectedSkill.skills} />
            </div>
        </div>
    </section>

  )
}

export default Skill