import "../styles/nav.css";

import { MdEmail, MdLocationPin } from "react-icons/md";

import { BsTelephoneInboundFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../images/logo2.png";

// import Dropdown from './new';
const Nav = () => {
  return (
    <>
      <div className="head2">
        <span id="logo">
          <a href='/'>
          <img src={logo} alt="logo" />
          </a>
        </span>

        <nav>
          <div className="dropdown-menu">
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
          </div>
          <div className="dropdown-menu">
            <span className="menu-btn">What We Do</span>
            <div className="menu-content">
              <a className="links-hidden" href="#">
                Disaster
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
          <div className="dropdown-menu">
            <span className="menu-btn">Our Campaigns</span>
            <div className="menu-content">
              <a className="links-hidden" href="#">
                Our Parteners
              </a>
              <a className="links-hidden" href="#">
                Contact Us
              </a>
              <a className="links-hidden" href="#">
                {" "}
                Testimonials
              </a>
              <a className="links-hidden" href="#">
                About Us
              </a>
            </div>
          </div>
          <div className="dropdown-menu">
            <span className="menu-btn">Events</span>
            <div className="menu-content">
              <a className="links-hidden" href="#">
                Event1
              </a>
              <a className="links-hidden" href="#">
                Event2
              </a>
              <a className="links-hidden" href="#">
                {" "}
                Event3
              </a>
              <a className="links-hidden" href="#">
                Event4
              </a>
            </div>
          </div>
          <span className="menu-btn">Career</span>
        </nav>
        <span className="dnt-spn">
          <button className="dnt-btn">Donate</button>
        </span>
      </div>
    </>
  );
};

export default Nav;
