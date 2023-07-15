import '../../styles/Modal.css';

import * as Yup from 'yup';

import React, { useState } from 'react';

import { useFormik } from 'formik';

const PayModal = ({ onClose }) => {
  const [showOtpInput, setShowOtpInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobileNumber: '',
      otp: '',
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string().required('Mobile number is required'),
      otp: Yup.string().when('mobileNumber', {
        is: (val) => val.length === 10,
        then: Yup.string().required('OTP is required'),
      }),
    }),
    onSubmit: (values) => {
      if (!showOtpInput) {
        // Send mobile number to your backend for OTP generation and delivery
        setShowOtpInput(true);
      } else {
        // Verify OTP with your backend
        console.log('Mobile Number:', values.mobileNumber);
        console.log('OTP:', values.otp);
        // Perform OTP verification logic here
      }
    },
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Enter Mobile Number</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-form-group">
            <label htmlFor="mobileNumber" className="modal-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
              className={`modal-input ${
                formik.errors.mobileNumber ? 'modal-error' : ''
              }`}
            />
            {formik.errors.mobileNumber && (
              <div className="modal-error-message">
                {formik.errors.mobileNumber}
              </div>
            )}
          </div>
          {showOtpInput && (
            <div className="modal-form-group">
              <label htmlFor="otp" className="modal-label">
                Enter OTP:
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                onChange={formik.handleChange}
                value={formik.values.otp}
                className={`modal-input ${
                  formik.errors.otp ? 'modal-error' : ''
                }`}
              />
              {formik.errors.otp && (
                <div className="modal-error-message">{formik.errors.otp}</div>
              )}
            </div>
          )}
          <button type="submit" className="modal-button">
            {!showOtpInput ? 'Submit' : 'Verify'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayModal;
