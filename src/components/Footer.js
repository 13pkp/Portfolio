import "./FooterStyles.css";

// rafce short cut
import React from 'react'

import { FaHome , FaPhone , FaMailBulk ,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
         <div className="left"> 

           <div className="location">
            {/* home icon display */}
            <FaHome size={20} style = {{color:
                "#fff" , marginRight: "2rem"}} />

            <div> 
            <p>vikhroli mumbai</p>
            <p>Mharashtra.</p>
            </div> 
         </div> 

         <div className="phone">
         <h4><FaPhone size={20} style = {{color:
         "#fff" , marginRight: "2rem"}} />
         7039312565</h4>
           </div>

           <div className="email">
         <h4><FaMailBulk size={20} style = {{color:
         "#fff" , marginRight: "2rem"}} />
       prajupawar1391@gmail.com
       </h4>
           </div>
         </div>


         <div className="right">
            <h4>Education</h4>
            <p>BSC Computer Science 
                with cgpa 8.60
                MERN Stack devloper .
                I enjoy discussing new projects and design challenges.
            </p>

            <div className="social" >
            <FaLinkedin 
            size={20}
             style = {{color:
             "#fff" , marginRight: "1rem"}} />
            </div>
            
            </div> 
        </div>    
    </div>
  );
};

export default Footer;
