import React from 'react'
import '../../styles/footer.css';
import {BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
   <>
   <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">FlowBegin Foundation</span>
        </div>
        <div className="media-icons">
          <a  ><FaFacebookF className='med-icn'/></a>
          <a ><BsTwitter  className='med-icn'/></a>
          <a ><BsInstagram className='med-icn'/></a>
          <a ><FaLinkedinIn className='med-icn'/></a>
          <a ><BsYoutube className='med-icn'/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#">Basic Education</a></li>
          <li><a href="#">Computer Education</a></li>
          <li><a href="#">Technical</a></li>
         
        </ul>
        <ul className="box">
          <li className="link_name">Our Work</li>
          <li><a href="#">Our Reach</a></li>
          <li><a href="#">Our Role</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Awards</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Donate</li>
          <li><a href="#">Online Donation</a></li>
          <li><a href="#">Give Equipments</a></li>
          <li><a href="#">Books&Tools</a></li>
          <li><a href="#">Sponser a Student fee for one year</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2023 <a href="#">FlowBegin Foundation.</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
   </>
  )
}

export default Footer;
