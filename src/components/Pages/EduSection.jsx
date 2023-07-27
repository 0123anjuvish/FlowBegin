import React from 'react'
import  '../../styles/EduSec.css';
import { GiBrainTentacle } from "react-icons/gi";
import {BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs";

import {FaUserGraduate,FaBriefcase,FaLightbulb,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import gal1 from '../../images/14.jpeg';
import gal2 from '../../images/15.jpeg';
import gal3 from '../../images/17.jpeg';
import gal4 from '../../images/16.jpeg';
const EduSection = () => {
    const handleYoutubeClick = () => {
        window.open('https://www.youtube.com/@Flowbeginfoundation', '_blank');
      };
      const handleFcBookClick = () => {
        window.open('https://www.facebook.com/flowbegin', '_blank');
      };
      const handleTwitterClick = () => {
        window.open('https://www.youtube.com/@Flowbeginfoundation', '_blank');
      };
      const handleLnkdnClick = () => {
        window.open('https://www.linkedin.com/in/flowbegin-foundation-377947284/', '_blank');
      };
      const handleInstaClick = () => {
        window.open('https://www.instagram.com/flowbegin.gos/', '_blank');
      };
  return (
    <>
      
    
  
    <section className='sec-edu-element'>
        <div className='cont-edu-element'>
            <div className='edu-element-col1'>
                <div className="gallery">
                    <img src={gal1} alt="Students"/>
                    <img src={gal2} alt="Students"/>
                    <img src={gal3} alt="Students"/>
                    <img src={gal4} alt="Students"/>
  {/* <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon"/>
  <img src="https://picsum.photos/id/188/400/400" alt="a sky photo of an old city"/>
  <img src="https://picsum.photos/id/211/400/400" alt="a small boat"/>
  <img src="https://picsum.photos/id/28/400/400" alt="a forest"/> */}
</div>
                 
            </div>
       
            <div className='edu-element-col2'>
                <div className="edu-element-text">
                    <div className="edu-element-content">
                        <h2>Share Your Charity Story</h2></div>
                        <div className="edu-box-description">
                        <p >Every Member has a story. What's yours?</p>
                    </div>
                    <div className="edu-element-icons">
                    <div className="media-icons" style={{ width: "560px",
    marginLeft: "-140px", justifyContent:"space-between",marginTop:"5em",
    display: "flex"}}>
         <div className='icn-a'><FaFacebookF className='med-icn' style={{marginTop:"24px",fontSize:"24px"}} onClick={handleFcBookClick}/></div>
         <div className='icn-a'><BsTwitter  className='med-icn'style={{marginTop:"24px",fontSize:"24px"}} onClick={handleTwitterClick}/></div>
         <div className='icn-a'><BsInstagram className='med-icn'style={{marginTop:"24px",fontSize:"24px"}} onClick={handleInstaClick}/></div>
         <div className='icn-a'><FaLinkedinIn className='med-icn'style={{marginTop:"24px",fontSize:"24px"}} onClick={handleLnkdnClick}/></div>
         <div className='icn-a'><BsYoutube className='med-icn'style={{marginTop:"24px",fontSize:"20px"}} onClick={handleYoutubeClick}/></div>
        </div>
                    </div>
                    </div>
                   
            
            </div>
        </div>
      </section>
        <section className="icn-section-eduban">
            <div className='purpose'>
            <h2>Purpose of our Services</h2>
            </div>
       
        <div className='catg-list-eduban'>
           
        <ul className='catg-ul-lst-eduban'>
            <li className='ul1-eduban'>
                <div className='ser-img-cont-eduban'>
                    <div className='ser-img-cont-icon-eduban'>
               <GiBrainTentacle style={{marginTop:"20px"}}/></div>
                </div>
                <div className='ser-img-cont-iName-eduban'>
               
                Knowledge Enhancement
                
                </div>
                </li>
            <li className='ul2-eduban' >
            <div className='ser-img-cont-eduban'>
            <div className='ser-img-cont-icon-eduban'>
           <FaUserGraduate style={{marginTop:"20px"}}/></div>
            </div>
            <div className='ser-img-cont-iName-eduban'>
           
            Personal Growth
                
                </div>
                </li>
            <li className='ul3-eduban'>
            <div className='ser-img-cont-eduban'> 
            <div className='ser-img-cont-icon-eduban'>
            <FaBriefcase style={{marginTop:"20px"}}/></div>
             </div>
             <div className='ser-img-cont-iName-eduban'>
            
             Career Opportunities
             </div>
             </li>
            <li className='ul4-eduban'>
            <div className='ser-img-cont-eduban'>
            <div className='ser-img-cont-icon-eduban'>
           < FaLightbulb style={{marginTop:"20px"}} />
           </div>
            </div>
            <div className='ser-img-cont-iName-eduban'>
          
            Critical Thinking
            </div>
            </li>
        </ul>
    
        </div>
    </section>
    </>
  )
}

export default EduSection
