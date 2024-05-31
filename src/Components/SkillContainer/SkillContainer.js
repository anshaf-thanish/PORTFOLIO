import React from 'react';
import {Element} from "react-scroll";
import skilling from "../../images/Skills.jpg";
import LinearProgress from "@mui/material/LinearProgress"
import './SkillContainer.css'

export const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
      <div className='skillContainer__image'>
         <img src={skilling} alt=''/>
      </div>

      <div className='skillContainer__text'>
           <h2>SKILLs...</h2>
           <div className='skillcontainer__skillset'>
                <h5>React</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>Java Script</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                    <LinearProgress variant="determinate" value={75}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>CSS/Saas</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                    <LinearProgress variant="determinate" value={85}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>Bootstrap</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                    <LinearProgress variant="determinate" value={90}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>Wordpress</h5>
                <div className='skillContainer__slider skillContainer__slider6'>
                    <LinearProgress variant="determinate" value={60}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>Python</h5>
                <div className='skillContainer__slider skillContainer__slider7'>
                    <LinearProgress variant="determinate" value={65}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>SQL</h5>
                <div className='skillContainer__slider skillContainer__slider8'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>Git & Github</h5>
                <div className='skillContainer__slider skillContainer__slider9'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>


            
      </div>
    </Element>
  )
}

export default SkillContainer;
