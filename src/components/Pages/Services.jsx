import React from 'react'
import '../../styles/services.css';
import { MdCastForEducation } from "react-icons/md";
import {AiFillEnvironment } from "react-icons/ai";
import {GiLifeInTheBalance } from "react-icons/gi";
import { SiWorldhealthorganization} from "react-icons/si";
import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <>
    <div className='service-div'>
        <div className='rect'></div>
    <div className='ser-cont'>
       
        <h5 id="h4">We serve our Best In</h5>
    </div>
    <div className='catg-list'>
    <ul className='catg-ul-lst'>
        <li className='ul1'>
            <div className='ser-img-cont'>
            <img  className='ser-img' src='https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVyYWwlMjBlZHVjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='card'/>
            </div>
            <div className='ser-img-cont-iName'>
            <div className='ser-img-cont-icon' style={{color:"blue"}}><MdCastForEducation/></div> 
            <NavLink to="/education" className="links-hidden">Education</NavLink>  
            
            </div>
            </li>
        <li className='ul2' >
        <div className='ser-img-cont'>
        <img  className='ser-img' src='https://media.istockphoto.com/id/1064031330/photo/pediatrician-doctor-examining-ill-boy-at-village.jpg?b=1&s=170667a&w=0&k=20&c=mMCkRofLa8sNhOhEjPFwdg0TgTr7r_mQroRjY0O4v-Q=' alt='card'/>
        </div>
        <div className='ser-img-cont-iName'>
        <div className='ser-img-cont-icon' style={{color:"red"}}><SiWorldhealthorganization/></div>  
            Health
            
            </div>
            </li>
        <li className='ul3'>
        <div className='ser-img-cont'> 
         <img  className='ser-img' src='https://media.istockphoto.com/id/1168843512/photo/tree-planting-growing-on-soil-in-girl-childs-hand-for-saving-world-environment-tree-care.jpg?b=1&s=170667a&w=0&k=20&c=8Vt6LLao6Ff7Q_upZKtN2nHjjEbUPxJmGOW0fg7kplU=' alt='card'/>
         </div>
         <div className='ser-img-cont-iName'>
         <div className='ser-img-cont-icon' style={{color:"lightgreen"}}><AiFillEnvironment/></div>   
         Environment
         </div>
         </li>
        <li className='ul4'>
        <div className='ser-img-cont'>
        <img  className='ser-img' src='https://images.unsplash.com/photo-1441307811206-a12c74889338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVyYWwlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='card'/>
        </div>
        <div className='ser-img-cont-iName'>
        <div className='ser-img-cont-icon'style={{color:"darkgreen"}}><GiLifeInTheBalance/></div>
        Livelihood
        </div>
        </li>
    </ul>

    </div>
    </div>
    </>
  )
}

export default Services;
