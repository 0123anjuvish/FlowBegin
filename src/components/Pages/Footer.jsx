import {React,useState} from 'react'
import '../../styles/footer.css';
import Success from '../Pages/Success';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    email: '',
  };

 
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };


  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
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
          <a href='https://www.facebook.com/flowbegin/' ><FaFacebookF className='med-icn'/></a>
          <a href=''><BsTwitter  className='med-icn'/></a>
          <a href='https://www.instagram.com/flowbegin.gos/'><BsInstagram className='med-icn'/></a>
          <a href="https://www.linkedin.com/in/flowbegin-foundation-377947284/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className='med-icn' />
    </a>
          <a  href='https://www.youtube.com/@Flowbeginfoundation'><BsYoutube className='med-icn'/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li style={{color:"white"}}>Home</li>
          <li style={{color:"white"}}>Contact us</li>
          <li style={{color:"white"}}>About us</li>
          <li style={{color:"white"}}>Get started</li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li style={{color:"white"}}>Basic Education</li>
          <li style={{color:"white"}}>Computer Education</li>
          <li style={{color:"white"}}>Technical</li>
         
        </ul>
        <ul className="box">
          <li className="link_name">Our Work</li>
          <li style={{color:"white"}}>Our Reach</li>
          <li style={{color:"white"}}>Our Role</li>
          <li style={{color:"white"}}>Prefrences</li>
          <li style={{color:"white"}}>Awards</li>
        </ul>
        <ul className="box">
          <li className="link_name">Donate</li>
          <li style={{color:"white"}}>Online Donation</li>
          <li style={{color:"white"}}>Give Equipments</li>
          <li style={{color:"white"}}>Books&Tools</li>
          <li style={{color:"white"}}>Sponser a Student fee for one year</li>
        </ul>
        <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateForm}
      
    >
      <Form className="box input-box">
        <li className="link_name">Subscribe</li>
        <li>
          <Field type="text" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="error" />
        </li>
        <li>
      
          <button type="submit" id='subs-btn' >Subscribe</button>
         
        </li>
      </Form>
    </Formik>
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
 
  {submitted && <Success onClose={() => setSubmitted(false)} />}
  
   </>
  )
}

export default Footer;
