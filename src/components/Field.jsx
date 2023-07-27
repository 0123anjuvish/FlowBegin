import React, { useState, useEffect } from 'react';
import '../styles/field.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from "react-router-dom";
import img1 from '../images/7.jpeg';
import img2 from '../images/2.jpeg';

import img3 from '../images/12.jpeg';
const Field = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: img1,
      content: {
        title: "Serve Better",
        subtitle: "Opportunity Through Our Education",
        description: "We are Happy to Have You With Us."
      }
    },
    {
      
      src:img2,
      content: {
        title: "Discover New Heights",
        subtitle: "Unlock Your Potential",
        description: "Join Us in Making a Difference."
      }
    },
    {
     
      src:img3,
      content: {
        title: "Empowering Communities",
        subtitle: "Building a Brighter Future",
        description: "Together, We Can Achieve More."
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
     <div className='field-cont' style={{ '--background-image': `url(${images[currentImage].src})` }}>
        <div className="testDiv">
          <section className="test-container">
            <h2 className="title-h2">
              <span>{images[currentImage].content.title}</span>
              <span>{images[currentImage].content.subtitle}</span>
              {/* <span className="description-hidden">{images[currentImage].content.description}</span> */}
            </h2>
           
          </section>
        
          <span className="usechrome">{images[currentImage].content.description}</span>
        </div>
        <div className="test-div-btn">
          <NavLink to='/education'>
          <button className='know-btn'>Know more</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Field;
