import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';

const Document = ({ onNext }) => {
    const initialValues = {
        passport: '',
        resume: '',
        transcript: ''
      };
    
      const handleSubmit = async(data)=>{
        console.log("data",data)
        // const res = await addStudent(data);
        // console.log('res',res)
        // onNext({AcedemicDetails: res})
      }
    
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
            <Form className="upload-documents-form">
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
            </Form>
          )}
        </Formik>
      );
    };
    
   


export default Document
