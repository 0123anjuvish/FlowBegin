import '../../styles/contact.css';

import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { motion } from 'framer-motion';
const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    contactNo: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contactNo: Yup.string().required('Contact No is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
   
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
 <div className='cnct-img-div'>
        <motion.img
          className='cntct-img'
         
          alt='image'
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 3.5 }} 
        />
       <div className="contact-text">
       <motion.h1
  style={{ opacity: 0, scale: 0.5 }}
  animate={{
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    transition: { duration: 7, repeat: Infinity, repeatDelay: 2.3 }
  }}
  whileHover={{ scale: 1.2 }}
>
  We would be happy if all of you join us and support us.
</motion.h1>



   </div>

      </div>
<div className="background">
  <div className="container">
   
      <div className='cntct-lft'>
        <div className='lft-header'>
        For more Information:
        </div>
        <div className='lft-cntct-content'>
        <h6 className='cntct-h6A'> FlowBegin Foundation </h6>
         <h6 className='cntct-h6B'> H. N. A-421 Sharda Vats Enclave  </h6>
         <h6 className='cntct-h6B'> Prem Nagar III Nangloi </h6>
         <h6 className='cntct-h6B'> New Delhi - 110086 </h6>
        </div>
        <div className='lft-cntct-add'>
        For Donation touch us on :
        <h6 className='cntct-h6D'>  test@gmail.com  or call us on - 9278336669</h6>
        
        </div>
       
      </div>
    
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT US</span>
           
          </div>
          <div className="app-contact">CONTACT INFO : +91 9278336669</div>
        </div>
        <div className="screen-body-item">
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="app-form">
          <div className="app-form-group">
            <Field
              type="text"
              name="name"
              className="app-form-control"
              placeholder="NAME"
            />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="app-form-group">
            <Field
              type="email"
              name="email"
              className="app-form-control"
              placeholder="EMAIL"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="app-form-group">
            <Field
              type="text"
              name="contactNo"
              className="app-form-control"
              placeholder="CONTACT NO"
            />
            <ErrorMessage name="contactNo" component="div" className="error-message" />
          </div>
          <div className="app-form-group message">
            <Field
              as="textarea"
              name="message"
              className="app-form-control"
              placeholder="MESSAGE"
            />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>
          <div className="app-form-group buttons">
            <button type="button" className="app-form-button">CANCEL</button>
            <button type="submit" className="app-form-button">SEND</button>
          </div>
        </Form>
      </Formik>
 
        </div>
      </div>
    </div>
    <div className="credits">
      inspired by
      <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
      FlowBegin Foundation
      </a>
    </div>
  </div>
</div>
<div className="map-container">
      <div className="map-overlay">
       
      </div>
      <iframe
        title="Google Map"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.363872781765!2d77.20900051481107!3d28.613895882411758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02b4f3f6f0b5%3A0x78b9f9f4778ebc18!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1560016932994!5m2!1sen!2sin"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
    </>
  )
}

export default Contact;
