import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

export const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Thanish Anshaf</h1>
            <p>A Professional Web Developer</p>
            <a href='https://www.dropbox.com/scl/fi/vu40yigq6kpozyj7jsyoh/Resume.pdf?rlkey=qsntsy5lymramryxzwwz9ib5i&st=s13j0m3n&dl=0'>
                <button className='topcontent__downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='topcontent__workButton'>MY Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
