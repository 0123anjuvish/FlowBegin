import '../../styles/Registr.css';

import React, { useState } from 'react';

import AcedemicDetails from './AcedemicDetails';
import Document from './Document';
import PaymentDetails from './PaymentDetails';
import PersonalDetails from './PersonalDetails';

const RegistrationForm = () => {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    personalDetails: {},
    academicDetails: {},
    documents: {},
    paymentDetails: {},
    studentId : ""
  });

  const handleNextStep = (data) => {
    console.log("handle next step called" , data)
    console.log(formData,"formdata")
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));

    // Navigate to the next step (Academic Details)
    setStep(step+1);
  };

  const handlePreviousStep = () => {
    // Navigate to the previous step
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails onNext={handleNextStep}  />;
      case 2:
        return <AcedemicDetails onNext={handleNextStep} studentId={formData.personalDetails.id || 2} onPrevious={handlePreviousStep} />;
      case 3:
        return <Document onNext={handleNextStep} studentId={formData.personalDetails.id ||1 } onPrevious={handlePreviousStep} />;
      case 4:
        return (
          <PaymentDetails
            formData={formData}
            onNext={(data) => {
              handleNextStep(data);
            }}
            onPrevious={handlePreviousStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="registration-container">
      <div className="reg-div">
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>Personal Details</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>Academic Details</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>Upload Documents</div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>Payment Details</div>
        </div>

        <div className="registration-form">
          {renderFormStep()}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
