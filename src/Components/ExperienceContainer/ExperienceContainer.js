import React from 'react'
import Experience from '../ExperienceBox/Experience';
import { Element } from 'react-scroll';
import "./ExperienceContainer.css"

export const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id='exp'>
       <h1>Experience</h1>
       <div className='experienceContainer__info'>
          <Experience number="+10" title="client"/>
          <Experience number="7+" title="projects" style={{backgroundColor:"#f64c08"}}/>
          <Experience number="2+" title="studies"/>
          <Experience number="5+" title="assignment"/>
       </div>
    </Element>
  )
}


export default ExperienceContainer;