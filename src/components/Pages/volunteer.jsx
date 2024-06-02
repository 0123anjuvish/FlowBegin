import React, { useState } from 'react';
import '../../styles/vol.css';
import img1 from '../../images/anju.jpeg';
import img2 from '../../images/nikesh.jpeg';
import img3 from '../../images/deepak.jpg';
import img4 from '../../images/vishal.jpg';
import img5 from '../../images/avi.jpg';
import img6 from '../../images/Khushi.jpg';

const volunteerTeam = [
  {
    name: "Anju Vishwakarma ",
    image: img1,
    role: "Director",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
  {
    name: "Nikesh",
    image: img2,
    role: "Supervisor",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
  {
    name: "Deepak",
    image: img3,
    role: "",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
  {
    name: "Vishal",
    image: img4,
    role: "Community Mobilizer",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
  {
    name: "Avinash",
    image: img5,
    role: "IT-Support",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
  {
    name: "Khushi",
    image: img6,
    role: "Team-Member",
    description: "With years of experience in the education sector Anju brings visionary leadership and a passion for transforming lives through quality education."
  },
];

const Volunteer = () => {
  const [currentVolunteer, setCurrentVolunteer] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextVolunteer = () => {
    setCurrentVolunteer((currentVolunteer + 1) % volunteerTeam.length);
    setZoomed(true); 
    setTimeout(() => setZoomed(false), 500); 
  };

  const handleVolunteerClick = (index) => {
    setCurrentVolunteer(index);
    setZoomed(true); 
    setTimeout(() => setZoomed(false), 500);
  };

  // Reorder volunteerTeam based on currentVolunteer index
  const reorderedVolunteerTeam = [
    ...volunteerTeam.slice(currentVolunteer),
    ...volunteerTeam.slice(0, currentVolunteer)
  ];

  return (
    
    <div className="about-container">
     
      <div className={`main-volunteer ${zoomed ? 'zoomed' : ''}`}>
        <img
          src={reorderedVolunteerTeam[0].image}
          alt={reorderedVolunteerTeam[0].name}
          className="volunteer-image"
        />
        <div className="arrow next" onClick={nextVolunteer}>&#8594;</div>
      
      </div>
      
      <div className="volunteer-list">
        {reorderedVolunteerTeam.map((volunteer, index) => (
          <div key={index} className="volunteer-card" onClick={() => handleVolunteerClick(index)}>
            <img src={volunteer.image} alt={volunteer.name} />
          </div>
          
        ))}
          <div className='description-div'>
        <h3>{reorderedVolunteerTeam[0].name}</h3>
        <p><strong>Role:</strong> {reorderedVolunteerTeam[0].role}</p>
        <p>{reorderedVolunteerTeam[0].description}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Volunteer;
