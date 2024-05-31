import React from 'react'
import Project from "../Project/Project"
import { Element } from 'react-scroll'
import "./ProjectContainer.css"

export const ProjectContainer = () => {
       const Projects=[
        {
            img:"https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-45017-14936128.jpg&fm=jpg",
            title:"Portfolio",
            desc:"Welcome to my full stack developer portfolio showcasing my expertise in front-end and back-end development, database management, and passion for creating seamless digital experiences.",
            link:"https://anshaf-thanish.github.io/Portfolio/"
        },
        
        {
            img:"https://sugarspunrun.com/wp-content/uploads/2022/04/Best-Chocolate-Cupcakes-1-of-1.jpg",
            title:"E-Commerce",
            desc:"Discover a diverse selection of delicious dishes, place orders effortlessly, and enjoy doorstep delivery with our user-friendly food ordering site.",
            link:"https://anshaf-thanish.github.io/E-Commerce/"
        },
        
        {
            img:"https://anastasionico.uk/img/blog/html-elements.jpg",
            title:"html_1st",
            desc:"Crafted HTML project with structured content, accessibility considerations, and semantic markup for optimal user experience",
            link:"https://thanishbazeer.neocities.org/Event/my%20first"
        },
       ]
    
  return (
   <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Explore My Creative Endeavors</p>
      <div className='projectContainer__projects'>
    {
        Projects.map((project,index)=>{
            return(
                <Project
                 key={index} 
                 img={project.img}
                 title={project.title}
                 desc={project.desc} 
                 link={project.link}
                 />
                
            )
        })
    }
      </div>
   </Element>
  )
}

export default ProjectContainer;
