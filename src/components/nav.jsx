import "../styles/nav.css";

import { MdEmail, MdLocationPin } from "react-icons/md";

import { BsTelephoneInboundFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {React,useState} from "react";
import logo from "../images/logo2.png";
import PayModal from "./Pages/PayModal";


const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    setShowModal(true);
  };

  const handleVerificationSuccess = () => {
    setShowModal(false);
    // Perform any additional actions upon successful verification
  };
  return (
    <>
      <div className="head2">
        <span id="logo">
        <NavLink to="/">
          <a href='/'>
           
          <img src={logo} alt="logo" />
          </a>
          </NavLink>
        </span>

        <nav>
          {/* <div className="dropdown-menu">
            <span className="menu-btn">Who We Are</span>
            <div className="menu-content">
              <NavLink to="/about" className="links-hidden">
                About Us
              </NavLink>
              <NavLink to="/contact" className="links-hidden">
                Contact Us
              </NavLink>
              <NavLink to="/ourPartner" className="links-hidden">
                Our Parteners
              </NavLink>
              <NavLink to="/Test" className="links-hidden">
                {" "}
                Testimonials
              </NavLink>
            </div>
          </div> */}
            <div className="dropdown-menu">
            <span className="menu-btn">What We Do</span>
            <div className="menu-content">
              <a className="links-hidden" href="#">
              Our Campaigns
              </a>
              <NavLink to="/education" className="links-hidden">
                Educational
              </NavLink>
              <a className="links-hidden" href="#">
                {" "}
                Environmental
              </a>
              <a className="links-hidden" href="#">
                {" "}
                HealthCare
              </a>
            </div>
          </div>
           <div className="menu-btn-abt">
           <NavLink to="/about" className="nvlnk" >
                About Us
              </NavLink>
           </div>
           <div className="menu-btn-cntc">
           <NavLink to="/contact"className="nvlnk" >
                Contact Us
              </NavLink>
           </div>
        
          <div className="menu-btn-pay">
          <button className="nvlnk" style={{border:"none", fontSize:"16px"}} onClick={handlePayment}>
          Fee Payment
        </button>
          </div>
          {showModal && (
        <PayModal
          onVerificationSuccess={handleVerificationSuccess}
          onClose={() => setShowModal(false)}
        />
      )}
          <div className="dropdown-menu">
            <span className="menu-btn" >Events</span>
            <div className="menu-content">
              <a className="nvlnk">
                Event1
              </a>
              <a className="links-hidden" >
                Event2
              </a>
              <a className="links-hidden" >
                {" "}
                Event3
              </a>
              <a className="links-hidden" >
                Event4
              </a>
            </div>
          </div>
          <span className="menu-btn-crr">Career</span>
        </nav>
        <span className="dnt-spn">
          <button className="dnt-btn">Donate</button>
        </span>
      </div>
    </>
  );
};

export default Nav;
