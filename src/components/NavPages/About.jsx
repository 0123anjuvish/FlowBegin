import React from 'react'
import '../../styles/about.css';
import AbtBanner from '../Pages/AbtBanner';
import Volunteer from '../Pages/volunteer';
const About = () => {
  return (
    <>

<div class="abt-container">
<AbtBanner/>
<div className="about_us">

<div className="mission">
    <span>MISSION</span>
    <p>Our mission is to provide accessible and affordable quality education to empower individuals and transform communities.</p>
          </div>
  <span style={{color:"black", fontSize:"34px"}}>FlowBegin Foundation</span>
  <p className='abt-para'>
  FlowBegin Foundation is a non-profit organization dedicated to promoting education and fostering positive change. We believe that education is the key to unlocking opportunities and building a brighter future. Through our commitment, passion, and innovative approaches, we aim to make a lasting impact on the lives of underprivileged children and communities.
          </p>
  <span style={{color:"black", fontSize:"34px"}}>HISTORY</span>
  <p className='abt-para' >
  Founded in 2023, FlowBegin Foundation has been actively working towards bridging the educational gap and creating equal opportunities for all. Over the years, we have successfully impacted the lives of thousands of individuals through our educational programs, scholarships, and community initiatives. Our relentless efforts and partnerships with local communities have made a significant difference in promoting education as a catalyst for social change.
          </p>
  <div className='card-img-div'>
 
  
  </div>
  <span style={{color:"black", fontSize:"34px"}}>OUR COMMITMENT</span>
  <p className='abt-para'>
  At FlowBegin Foundation, we are committed to ensuring that every individual has access to quality education, regardless of their socio-economic background. We strive to create a nurturing and inclusive learning environment that fosters personal growth, critical thinking, and holistic development. Through our dedicated team of educators, volunteers, and supporters, we aim to empower individuals to reach their full potential and contribute to society positively.
          </p>
</div>

    {/* <div className="wrapper2">
      <h2>Our Team</h2> */}
      {/* <div className="faculties">
        <div className="unit">
          <img id="div-img"src= {anju} alt="director-image"/>
          <p className='abt-para'></p>
          <p className='abt-para'>
            </p>
            </div>
        <div className="unit">
          <img   id="div-img" src=
{vishal} alt="Community-Mobilizer"/>
          <p className='abt-para'>Vishal, Community Mobilizer</p>
          <p className='abt-para'>As the Principal, Mathew Tram is dedicated to providing a nurturing and inclusive learning environment that encourages students' growth and development.</p>
            
            </div>
            
        <div className="unit">
          <img id="div-img"
            src={nik} alt="Supervisor"/>
          <p className='abt-para'>Nikesh Kumar, Supervisor</p>
         /
        </div>
       
        <div className="unit">
          <img  id="div-img" src=
         {deepak} alt="Faculty"/>
          <p className='abt-para'>Deepak Kumar, Faculty</p>
          
        </div>
        <div className="unit">
          <img  id="div-img" src=
         {avi} alt="IT-Support"/>
          <p className='abt-para'>AvinashVishwakarma, IT Support</p>
         
        </div>
      </div> */}


    {/* </div> */}

    <div className="wrapper2">
      <h2>Our Team</h2>
  <Volunteer/>
  </div>
  </div>

    </>
  )
}

export default About;
