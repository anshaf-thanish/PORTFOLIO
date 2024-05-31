import React from 'react'
import { Element } from 'react-scroll';
import { IconButton } from "@mui/material"
import {Facebook, Instagram, LinkedIn} from "@mui/icons-material"
import "./Contact.css"

export const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                Call : <span>+94 75 288 2802 / +94 76 108 2802</span>
                </p>

                <p>
                    Email : <span>
                              <a href='https://mail.google.com/'>anshafthanish@gmail.com</a>
                            </span>
                </p>

                <p>
                    Github : <span>
                               <a href='https://github.com/anshaf-thanish'>anshaf-thanish</a>
                             </span>
                </p>

                <div className='contact__icons'>
                     <a href='https://www.linkedin.com/in/thanish-anshaf'>
                        <IconButton>
                          <LinkedIn/>
                        </IconButton>
                     </a>
                     <a href='https://www.facebook.com/thanish.bazeer'>
                        <IconButton>
                          <Facebook/>
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/thanishbazeer'>
                        <IconButton>
                           <Instagram/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact;

