import React from 'react'
import '../../styles/about.css';
const About = () => {
  return (
    <>

<div class="abt-container">

    {/* <div class="wrapper">
      <div class="hr">
        <hr/>
        <h2>Our Mission</h2>
        <hr/>
      </div>

      <p id="mission-txt">"To Provide Quality Education at Low Cost"</p>

    </div> */}

    {/* <div class="wrapper1">
      <h2>About</h2>
      <div>
        <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png" alt="img"/>
        <p id='abt-para'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit eos eveniet numquam ad aliquid. Eius magnam, possimus nemo, cum molestias eum fuga cumque perferendis pariatur inventore, reiciendis exercitationem provident. </p>
        <p id='abt-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eius itaque error recusandae vel doloribus nemo? Delectus nobis eligendi non quisquam ab provident beatae nostrum sed, ullam repellendus totam.</p>
      </div>
    </div> */}

<div className="about_us">
  <h2>OUR FOUNDATION</h2>
  <div className="mission">
    <span>MISSION</span>
    <p  style={{fontSize:"24px"}}>Our mission is to Provide Quality Education at Low Cost. </p>
  </div>
  <span style={{color:"black", fontSize:"34px"}}>FlowBegin Foundation</span>
  <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ea sunt quos maxime hic eaque dolorum commodi nihil necessitatibus maiores, impedit ab, ullam veniam dignissimos cupiditate aspernatur praesentium in! Sint. </p>
  <span style={{color:"black", fontSize:"34px"}}>HISTORY</span>
  <p id='abt-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cupiditate maiores dolorum, earum ipsa quaerat perferendis minus, rerum corrupti qui est quibusdam eveniet vel ipsum nesciunt a quidem nisi exercitationem!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam repellendus illum magnam, id incidunt ut qui nulla. Velit, repellat alias? Omnis voluptas voluptatem quisquam dolorem odio facere. Tempora, sed magni.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, molestiae officiis, atque reiciendis minus recusandae ad itaque beatae voluptas rem, labore quaerat omnis fugit. Accusantium nihil facere similique tempora id!
  </p>
  <img src="https://aircargoworld.com/wp-content/uploads/2019/05/PACTL-at-PVG.jpg" className='abt-img'  alt=""/>
  <span style={{color:"black", fontSize:"34px"}}>OUR COMMITMENT</span>
  <p id='abt-para'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quibusdam quisquam laudantium nesciunt ut odio. Commodi, ratione dignissimos? Ipsa minus officiis libero adipisci quas dicta culpa mollitia minima aut magnam.
  </p>
</div>

    <div className="wrapper2">
      <h2>Faculties</h2>
      <div className="faculties">
        <div className="unit">
          <img src="https://png.pngtree.com/png-vector/20190703/ourmid/pngtree-human-avatar-free-vector-png-image_1535585.jpg" alt=""/>
          <p id='abt-para'>Jona Chen, Director</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
          <p id='abt-para'>Mathew Tram, Principal</p>
          <p id='abt-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div className="unit">
          <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.2.1974617117.1671349017&semt=ais" alt=""/>
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
