import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';

const PaymentDetails = ({ onNext }) => {
    const initialValues = {
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
      };
    
      const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
        onNext({ paymentDetails: values });
        // setSubmitting(false);
      };
    
      const validateForm = values => {
        const errors = {};
    
        if (!values.cardNumber) {
          errors.cardNumber = 'Required';
        }
    
        if (!values.cardName) {
          errors.cardName = 'Required';
        }
    
        if (!values.expiryDate) {
          errors.expiryDate = 'Required';
        }
    
        if (!values.cvv) {
          errors.cvv = 'Required';
        } else if (!/^[0-9]{3,4}$/i.test(values.cvv)) {
          errors.cvv = 'Invalid CVV';
        }
    
        return errors;
      };
    
      return (
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <form className="payment-detail-form">
              <h4 >Make Payment</h4>
              <div className="form-group3">
                <label htmlFor="cardNumber" id='pay-lbl'>Card Number:</label>
                <Field type="number" name="cardNumber" id="cardNumber" />
                <ErrorMessage name="cardNumber" component="div" className="error-message" />
              </div>
    
              <div className="form-group3">
                <label htmlFor="cardName" id='pay-lbl'>Cardholder Name:</label>
                <Field type="text" name="cardName" id="cardName" />
                <ErrorMessage name="cardName" component="div" className="error-message" />
              </div>
    
              <div className="form-group3">
                <label htmlFor="expiryDate"id='pay-lbl'>Expiry Date:</label>
                <Field type="date" name="expiryDate" id="expiryDate" />
                <ErrorMessage name="expiryDate" component="div" className="error-message" />
              </div>
    
              <div className="form-group3">
                <label htmlFor="cvv"id='pay-lbl'>CVV:</label>
                <Field type="number" name="cvv" id="cvv" />
                <ErrorMessage name="cvv" component="div" className="error-message" />
              </div>
    
              <button type="submit" disabled={isSubmitting} id='pay-btn'>Submit</button>
            </form>
          )}
        </Formik>
      );
    };


export default PaymentDetails
