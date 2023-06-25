import React from 'react';
import '../styles/field.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import home from '../images/Home.png';
import Testimonial from './NavPages/Testimonial';

const Field = () => {
  return (
    <>
      <Carousel autoPlay interval={5000} transitionTime={500} infiniteLoop showThumbs={false}>
        <div className='field-cont'>
          <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="banner" />
          <div className="testDiv">
            <section className="test-container">
              <h2 className="title-h2">
                <span>Serve Better</span>
                <span>opportunity Through our</span>
                <span>Education &amp; Empowerment</span>
              </h2>
            </section>
            <span className="usechrome">We are Happy to Being with us.</span>
          </div>
        </div>
        <div className='field-cont'>
          <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="banner" />
          <div className="testDiv">
            <section className="test-container">
              <h2 className="title-h2">
                <span>Serve Better</span>
                <span>opportunity Through our</span>
                <span>Education &amp; Empowerment</span>
              </h2>
            </section>
            <span className="usechrome">We are Happy to Being with us.</span>
          </div>
        </div>
        <div className='field-cont'>
          <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="banner" />
          <div className="testDiv">
            <section className="test-container">
              <h2 className="title-h2">
                <span>Serve Better</span>
                <span>opportunity Through our</span>
                <span>Education &amp; Empowerment</span>
              </h2>
            </section>
            <span className="usechrome">We are Happy to Being with us.</span>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Field;
