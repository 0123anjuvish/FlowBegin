import React, { useState } from 'react';
import '../../styles/Registr.css';
import PersonalDetails from './PersonalDetails';
import AcedemicDetails from './AcedemicDetails';
import Document from './Document';
import PaymentDetails from './PaymentDetails';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    academicDetails: {},
    documents: {},
    paymentDetails: {}
  });

  const handleNextStep = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));

    // Navigate to the next step (Academic Details)
    setStep(2);
  };

  const handlePreviousStep = () => {
    // Navigate to the previous step
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails onNext={handleNextStep} />;
      case 2:
        return <AcedemicDetails onNext={handleNextStep} onPrevious={handlePreviousStep} />;
      case 3:
        return <Document onNext={handleNextStep} onPrevious={handlePreviousStep} />;
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
