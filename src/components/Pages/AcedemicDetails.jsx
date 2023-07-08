import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import React from 'react';
import { addAcademic } from '../../Apis/student';

const AcedemicDetails = ({ onNext, studentId }) => {
 
  
    const initialValues = {
    university: '',
    degree: '',
    major: '',
    graduationYear: ''
  };

 

  
  const validateForm = values => {
    const errors = {};

    if (!values.university) {
      errors.university = 'Required';
    }

    if (!values.degree) {
      errors.degree = 'Required';
    }

    if (!values.major) {
      errors.major = 'Required';
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
          <div className="form-group">
            <label htmlFor="university">University</label>
            <Field type="text" name="university" id="university" />
            <ErrorMessage name="university" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <Field type="text" name="degree" id="degree" />
            <ErrorMessage name="degree" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="major">Major</label>
            <Field type="text" name="major" id="major" />
            <ErrorMessage name="major" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="graduationYear">Graduation Year</label>
            <Field type="date" name="graduationYear" id="graduationYear" dateFormat="yyyy-MM-dd"/>
                 <ErrorMessage
                   name="graduationYear"
                   component="div"
                   className="error-message"
                 />
          </div>

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
      
   
 

export default AcedemicDetails
