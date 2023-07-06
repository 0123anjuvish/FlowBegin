import React from 'react'
import '../../styles/about.css';
import Card from '../Pages/card';
import AbtBanner from '../Pages/AbtBanner';

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
 
  {/* <Card/> */}
  </div>
  <span style={{color:"black", fontSize:"34px"}}>OUR COMMITMENT</span>
  <p className='abt-para'>
  At FlowBegin Foundation, we are committed to ensuring that every individual has access to quality education, regardless of their socio-economic background. We strive to create a nurturing and inclusive learning environment that fosters personal growth, critical thinking, and holistic development. Through our dedicated team of educators, volunteers, and supporters, we aim to empower individuals to reach their full potential and contribute to society positively.
          </p>
</div>

    <div className="wrapper2">
      <h2>Faculties</h2>
      <div className="faculties">
        <div className="unit">
          <img id="div-img"src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-human-avatar-free-vector-png-image_1535585.jpg" alt=""/>
          <p className='abt-para'>Jona Chen, Director</p>
          <p className='abt-para'>With years of experience in the education sector, Jona Chen brings visionary leadership and a passion for transforming lives through quality education.</p>
            </div>
        <div className="unit">
          <img   id="div-img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
          <p className='abt-para'>Mathew Tram, Principal</p>
          <p className='abt-para'>As the Principal, Mathew Tram is dedicated to providing a nurturing and inclusive learning environment that encourages students' growth and development.</p>
            </div>
            
        <div className="unit">
          <img id="div-img"  src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.2.1974617117.1671349017&semt=ais" alt=""/>
          <p className='abt-para'>Lawn Sethi, Vice Principal</p>
          <p className='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>
        </div>
       
        <div className="unit">
          <img  id="div-img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
          <p className='abt-para'>Mathew Tram, Principal</p>
          <p className='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img  id="div-img" src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.2.1974617117.1671349017&semt=ais" alt=""/>
          <p className='abt-para'>Lawn Sethi, Vice Principal</p>
          <p className='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>
        </div>
      </div>
    </div>

  </div>
    </>
  )
}

export default About;
