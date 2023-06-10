// import React from 'react';
// import '../../styles/edu.css';
// import RegistrationForm from '../Pages/RegistrationPortal';

// const EducationPage = () => {
//   return (
//     <div className="education-page">
//       <h1 id='edu-h1'>Welcome to Our Education Institute</h1>
//       <p id='edu-p'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
//         volutpat mauris non leo venenatis posuere. Fusce fringilla tempor
//         libero vitae fermentum. Aliquam erat volutpat. Sed in libero vel risus
//         cursus pharetra. Nunc tincidunt lacus et augue volutpat, vitae finibus
//         justo consectetur. In fringilla iaculis ipsum vel facilisis. Mauris
//         dignissim, sapien id efficitur consequat, tellus lectus aliquam nisi,
//         sed consectetur velit nunc vitae purus. Integer facilisis dui augue, vel
//         viverra velit commodo sed.
//       </p>

//       <button className="registration-button">Register Now</button>

     
//     </div>
//   );
// };

// export default EducationPage;

import React, { useState } from 'react';
import '../../styles/edu.css';
import RegistrationForm from '../Pages/RegistrationPortal';

const EducationPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    console.log("anju");
  };
  

  return (
    // <div className="education-page">
    //   <h1 id="edu-h1">Welcome to Our Education Institute</h1>
    //   <p id="edu-p">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    //     volutpat mauris non leo venenatis posuere. Fusce fringilla tempor
    //     libero vitae fermentum. Aliquam erat volutpat. Sed in libero vel risus
    //     cursus pharetra. Nunc tincidunt lacus et augue volutpat, vitae finibus
    //     justo consectetur. In fringilla iaculis ipsum vel facilisis. Mauris
    //     dignissim, sapien id efficitur consequat, tellus lectus aliquam nisi,
    //     sed consectetur velit nunc vitae purus. Integer facilisis dui augue, vel
    //     viverra velit commodo sed.
    //   </p>

    //   <button className="registration-button" onClick={handleRegistrationClick}>
    //     Register Now
    //   </button>

    //   {showRegistration ? <RegistrationForm /> : null}
    // </div>
    <RegistrationForm/>
  );
};

export default EducationPage;
