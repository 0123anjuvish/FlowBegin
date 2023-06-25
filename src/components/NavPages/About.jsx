import React from 'react'
import '../../styles/about.css';
import Card from '../Pages/card';
import TextAnm from '../Pages/TextAnm';
const About = () => {
  return (
    <>

<div class="abt-container">
<div className="about_us">


  <h2>OUR FOUNDATION</h2>
 
  <div className="mission">
    <span>MISSION</span>
    <p  style={{fontSize:"24px"}}>Our mission is to Provide Quality Education at Low Cost. </p>
  </div>
  <span style={{color:"black", fontSize:"34px"}}>FlowBegin Foundation</span>
  <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ea sunt quos maxime hic eaque dolorum commodi nihil necessitatibus maiores, impedit ab, ullam veniam dignissimos cupiditate aspernatur praesentium in! Sint. </p>
  <span style={{color:"black", fontSize:"34px"}}>HISTORY</span>
  <p id='abt-para' className='abt-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cupiditate maiores dolorum, earum ipsa quaerat perferendis minus, rerum corrupti qui est quibusdam eveniet vel ipsum nesciunt a quidem nisi exercitationem!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam repellendus illum magnam, id incidunt ut qui nulla. Velit, repellat alias? Omnis voluptas voluptatem quisquam dolorem odio facere. Tempora, sed magni.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, molestiae officiis, atque reiciendis minus recusandae ad itaque beatae voluptas rem, labore quaerat omnis fugit. Accusantium nihil facere similique tempora id!
  </p>
  <div className='card-img-div'>
 
  <Card/>
  </div>
  <span style={{color:"black", fontSize:"34px"}}>OUR COMMITMENT</span>
  <p id='abt-para'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quibusdam quisquam laudantium nesciunt ut odio. Commodi, ratione dignissimos? Ipsa minus officiis libero adipisci quas dicta culpa mollitia minima aut magnam.

  </p>
</div>

    <div className="wrapper2">
      <h2>Faculties</h2>
      <div className="faculties">
        <div className="unit">
          <img id="div-img"src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-human-avatar-free-vector-png-image_1535585.jpg" alt=""/>
          <p id='abt-para'>Jona Chen, Director</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img   id="div-img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
          <p id='abt-para'>Mathew Tram, Principal</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img id="div-img"  src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.2.1974617117.1671349017&semt=ais" alt=""/>
          <p id='abt-para'>Lawn Sethi, Vice Principal</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>
        </div>
       
        <div className="unit">
          <img  id="div-img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
          <p id='abt-para'>Mathew Tram, Principal</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img  id="div-img" src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.2.1974617117.1671349017&semt=ais" alt=""/>
          <p id='abt-para'>Lawn Sethi, Vice Principal</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>
        </div>
      </div>
    </div>

  </div>
    </>
  )
}

export default About;
