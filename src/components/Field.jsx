import React from 'react'
import '../styles/field.css';
import home  from '../images/Home.png';
import Testimonial from './NavPages/Testimonial';
const Field = () => {
  return (
    <>
  <div className='field-cont'>
	
<img src= "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt ="banner"/>
<Testimonial/>
  </div>
    </>
  )
}

export default Field;
