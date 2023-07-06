

import React, { useState } from 'react';
import '../../styles/edu.css';
import RegistrationForm from '../Pages/RegistrationPortal';
import EduBanner from '../NavPages/EduBan';
import EduSection from './EduSection';

const EducationPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    console.log("anju");
  };
  

  return (
    
    <div className="education-container">
      <div className="education-ban-container">
       <EduBanner/>
      
     
      </div>
      <div className='edu-section-we'>
      <EduSection/>
     </div>
     <div className='card-purpose'>
            <h2>
              Our Facilities
            </h2>
          </div>
        <div className="education-section">
        
          <div className="education-card">
          <img src="https://media.istockphoto.com/id/1224309929/photo/digital-native-students-e-learning-over-computers-at-school.jpg?s=612x612&w=0&k=20&c=RntH1W-n6oGXeyGqbufTi8Wx6cqtOuaw_Nu60lUOIBw=" alt="Card1" />
            <h3 className="card-title">School Education</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae lacus eget dolor ultrices fermentum.
            </p>
          </div>
          <div className="education-card">
          <img src="https://media.istockphoto.com/id/895483578/photo/school-kids-running-in-schoolyard.jpg?s=612x612&w=0&k=20&c=v-XPC1BMvWqrJJWPOjSLlSarEcL_dKRq47jkIMY64Jk=" alt="Card2" />
            <h3 className="card-title">Computer Education</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae lacus eget dolor ultrices fermentum.
            </p>
          </div>
          <div className="education-card">
          <img src="https://media.istockphoto.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=0&k=20&c=kFR__hBLIM-0PW6k4lSqAQJGo-ukLu-bbsOQk_V6edA=" alt="Card3" />
            <h3 className="card-title">Personality Development</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae lacus eget dolor ultrices fermentum.
            </p>
          </div>
          <div className="education-card">
          <img src="https://media.istockphoto.com/id/1216453954/photo/empty-classroom.jpg?s=612x612&w=0&k=20&c=HT2jBTNGKfxbFab3_c59hTqO_h36bc915PGYX5I1rNU=" alt="card4" style={{width:"612px",height:"400px"}} />
            <h3 className="card-title">Job Placement</h3>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae lacus eget dolor ultrices fermentum.
            </p>
          </div>
        </div> 
      </div>
    
  );
};


export default EducationPage;
