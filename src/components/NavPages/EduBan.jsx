import React from 'react'
import '../../styles/Eduban.css';
import { NavLink } from "react-router-dom";
const EduBanner = () => {
  return (
    <>
 
    <section className="elementor-section elementor-top-section elementor-element elementor-element-7b4f70c elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7b4f70c" data-element_type="section">
<div className="elementor-container elementor-column-gap-default">
  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0cf3961" data-id="0cf3961" data-element_type="column">
    <div className="text-edu-ban">
      <div className="heading-edu-ban">
        <h2 className="heading-edu-ban">Quality Education for All</h2>
      </div>
      <div className="edu-content-edu">
        <p id="edu-p-text">At our NGO, we are committed to empowering individuals through education. We believe that education is a fundamental right and a powerful tool for positive change. Our dedicated team works tirelessly to provide quality education to underprivileged children and communities.</p>
      </div>
      <div className="connect-page-btn-edu">
        <NavLink to='/register'>
        <button>Register Here</button>
        </NavLink>
      </div>
    </div>
  </div>
  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f620e10" data-id="f620e10" data-element_type="column">
    <div className="elementor-widget-wrap elementor-element-populated">
      <div className="elementor-element elementor-element-1788238 elementor-widget elementor-widget-image" data-id="1788238" data-element_type="widget" data-widget_type="image.default">
        <div className="elementor-widget-container">
       
  <img id='img-ban-edu' src='https://media.istockphoto.com/id/1033277722/photo/textbooks-on-wooden-school-desk-with-chalkboard.jpg?s=612x612&w=0&k=20&c=l9q-CmG8sf7iNNygEiGEHp-LHt2_w9noAYwQNAIzk9k=' alt='education'/>

        
        </div>
      </div>
    </div>
  </div>
</div>
</section>

  </>
  )
}

export default EduBanner;
