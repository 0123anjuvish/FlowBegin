import React from 'react';
import '../../styles/AbtBan.css';
import { NavLink } from "react-router-dom";
const AbtBanner = () => {
  return (
    <>
      <section id="lifeline_banner" className="banner-style-2">
        <div className="page-banner-style1 text-center position-relative">
          <div
            className="fixed-bg"
            style={{
              backgroundImage:
                'url(https://lifeline.webinane.com/wp-content/uploads/2023/05/banner-3-1.jpg)',
            }}
          ></div>
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-7b4f70c elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7b4f70c" data-element_type="section">
  <div className="elementor-container elementor-column-gap-default">
    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0cf3961" data-id="0cf3961" data-element_type="column">
      <div className="text-abt">
        <div className="heading-abt">
          <h2 className="heading-abt">What we do our work</h2>
        </div>
        <div className="abt-content-abt">
          <p id="abt-p-text">At our NGO, we are committed to empowering individuals through education. We believe that education is a fundamental right and a powerful tool for positive change. Our dedicated team works tirelessly to provide quality education to underprivileged children and communities.</p>
        </div>
        <div className="connect-page-btn">
          <NavLink to='/education'>
          <button>Know more</button>
          </NavLink>
        </div>
      </div>
    </div>
    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f620e10" data-id="f620e10" data-element_type="column">
      <div className="elementor-widget-wrap elementor-element-populated">
        <div className="elementor-element elementor-element-1788238 elementor-widget elementor-widget-image" data-id="1788238" data-element_type="widget" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <img decoding="async" width="622" height="552" src="https://lifeline.webinane.com/wp-content/uploads/2021/12/elementor-2.png" className="attachment-full size-full wp-image-9347" alt="" loading="lazy" srcSet="https://lifeline.webinane.com/wp-content/uploads/2021/12/elementor-2.png 622w, https://lifeline.webinane.com/wp-content/uploads/2021/12/elementor-2-600x532.png 600w, https://lifeline.webinane.com/wp-content/uploads/2021/12/elementor-2-300x266.png 300w" sizes="(max-width: 622px) 100vw, 622px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default AbtBanner;
