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
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <Field type="text" name="cardNumber" id="cardNumber" />
                <ErrorMessage name="cardNumber" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="cardName">Cardholder Name</label>
                <Field type="text" name="cardName" id="cardName" />
                <ErrorMessage name="cardName" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <Field type="text" name="expiryDate" id="expiryDate" />
                <ErrorMessage name="expiryDate" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <Field type="text" name="cvv" id="cvv" />
                <ErrorMessage name="cvv" component="div" className="error-message" />
              </div>
    
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
          )}
        </Formik>
      );
    };


export default PaymentDetails
