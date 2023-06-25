import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';

const AcedemicDetails = ({ onNext }) => {
 
  
      
      const initialValues = {
   currentclass: '',
    pastclass: '',
    schoolname: '',
    PassingYear: '',
    Percetage: ''
  };

  const handleSubmit = (values) => {
   
    console.log(values);
    
    onNext({ academicDetails: values });


  };

  const validateForm = values => {
    const errors = {};

    if (!values.currentclass) {
      errors.currentclass = 'Required';
    }

    if (!values.pastclass) {
      errors.pastclass = 'Required';
    }

    if (!values.schoolname) {
      errors.schoolname = 'Required';
    }

    if (!values.PassingYear) {
      errors.PassingYear = 'Required';
    } else if (!/^[0-9]{4}$/i.test(values.PassingYear)) {
      errors.PassingYear = 'Invalid passing year';
    }
    if (!values.Percetage) {
      errors.Percetage = 'Required';
    }

    return errors;
  };

  return (
   
    <Formik
      initialValues={initialValues}
      validate={validateForm}
    
    >
      {({ isSubmitting }) => (
        <form className="academic-detail-form">
          <h4>Academic Field</h4>
          <div className="form-group1">
            <label htmlFor="CurrentClass">CurrentClass:</label>
            <Field type="text" name="CurrentClass" id="CurrentClass" />
            <ErrorMessage name="CurrentClass" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="PastClass">PastClass:</label>
            <Field type="text" name="PastClass" id="PastClass" />
            <ErrorMessage name="PastClass" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="SchoolName">SchoolName:</label>
            <Field type="text" name="SchoolName" id="SchoolName" />
            <ErrorMessage name="SchoolName" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="PassingYear">Passing Year:</label>
            <Field type="date" name="PassingYear" id="PassingYear" />
            <ErrorMessage name="PassingYear" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="percentage">Percentage:</label>
            <Field type="text" name="percentage" id="percentage" />
            <ErrorMessage name="percentage" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting}   onClick={handleSubmit} id='ace-btn'>Save&next</button>
        </form>
      )}
    </Formik>
  );
};
      
   
 

export default AcedemicDetails
