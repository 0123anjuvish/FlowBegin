import '../../styles/contact.css';

import React from 'react';

const Contact = () => {
  return (
    <>
<div className='cnct-img-div'>
  <img className='cntct-img' src='https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="image"/>
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
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" value=""/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
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
<div className='map-container'>
        <div className="map-overlay">
          <div className="map-text">Location</div>
        </div>
        <img
          src='https://maps.googleapis.com/maps/api/staticmap?center=28.6139,77.2090&zoom=14&size=600x400&markers=28.6139,77.2090&key=YOUR_API_KEY'
          alt='map'
        />
      </div>
    </>
  )
}

export default Contact;
