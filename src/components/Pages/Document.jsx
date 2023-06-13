import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';

const Document = ({ onNext }) => {
    const initialValues = {
        passport: '',
        resume: '',
        transcript: ''
      };
    
      const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
        onNext({ documents: values });
        // setSubmitting(false);
      };
    
      const validateForm = values => {
        const errors = {};
    
        if (!values.passport) {
          errors.passport = 'Required';
        }
    
        if (!values.resume) {
          errors.resume = 'Required';
        }
    
        if (!values.transcript) {
          errors.transcript = 'Required';
        }
    
        return errors;
      };
    
      return (
        <Formik
          initialValues={initialValues}
          validate={validateForm}
        >
          {({ isSubmitting }) => (
            <form className="upload-documents-form">
              <div className="form-group">
                <label htmlFor="passport">Passport</label>
                <Field type="file" name="passport" id="passport" />
                <ErrorMessage name="passport" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <Field type="file" name="resume" id="resume" />
                <ErrorMessage name="resume" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="transcript">Transcript</label>
                <Field type="file" name="transcript" id="transcript" />
                <ErrorMessage name="transcript" component="div" className="error-message" />
              </div>
    
              <button type="submit" disabled={isSubmitting}  onClick={handleSubmit}>Submit</button>
            </form>
          )}
        </Formik>
      );
    };
    
   


export default Document
