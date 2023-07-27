import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';
import { addAcademic } from '../../Apis/student';

const AcedemicDetails = ({ onNext, studentId }) => {
 
  
    const initialValues = {
  current_class: '',
 past_class: '',
   school_name: '',
   passing_year:'',
  percentage: ''
  };
  
  const validateForm = values => {
    const errors = {};

    if (!values.current_class) {
      errors.current_class = 'Required';
    }

    if (!values.past_class) {
      errors.past_class = 'Required';
    }

    if (!values.school_name) {
      errors.school_name = 'Required';
    }
    if (!values.passing_year) {
      errors.passing_year = 'Required';
    }
    if (!values.percentage) {
      errors.percentage = '';
    }


    return errors;
  };
  const handleSubmit = async(data)=>{
    console.log("data",data)
   
    data.student = studentId
    if (studentId)
   { const res = await addAcademic(data);
    console.log('res',res)
    onNext({academicDetails: res})
  }
  }

  return (
   
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={values => {
        // same shape as initial values
        handleSubmit(values)
      }}
    
    >
      {({values, isSubmitting }) => (
        <Form className="academic-detail-form">
        <h4>Academic Field</h4>
        <div className="form-group1">
            <label htmlFor="CurrentClass" style={{color:"white",position:"relative",top:"25px"}}>CurrentClass:</label>
            <Field type="text" name="current_class" id="current_class" />
            <ErrorMessage name="CurrentClass" component="div" className="error-message" />
          </div>


          <div className="form-group1">
            <label htmlFor="PastClass"style={{color:"white",position:"relative",top:"25px"}}>PastClass:</label>
            <Field type="text" name="past_class" id="past_class" />
            <ErrorMessage name="PastClass" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="SchoolName" style={{color:"white",position:"relative",top:"25px"}}>SchoolName:</label>
            <Field type="text" name="school_name" id="school_name" />
            <ErrorMessage name="SchoolName" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="PassingYear" style={{color:"white",position:"relative",top:"25px"}}>Passing Year:</label>
            <Field type="date" name="passing_year" id="passing_year" />
            <ErrorMessage name="PassingYear" component="div" className="error-message" />
          </div>

          <div className="form-group1">
            <label htmlFor="percentage" style={{color:"white",position:"relative",top:"25px"}}>Percentage:</label>
            <Field type="text" name="percentage" id="percentage" />
            <ErrorMessage name="percentage" component="div" className="error-message" />
          </div>


          <button type="submit" disabled={isSubmitting} id='ace-btn'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
      
   
 

export default AcedemicDetails