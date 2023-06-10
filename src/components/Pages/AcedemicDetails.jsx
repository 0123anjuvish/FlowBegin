import React from 'react';
import { Formik, Form, Field, FieldArray,ErrorMessage } from 'formik';
import '../../styles/stuform.css';

const AcedemicDetails = () => {
 
  
      
      const initialValues = {
    university: '',
    degree: '',
    major: '',
    graduationYear: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
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

    if (!values.graduationYear) {
      errors.graduationYear = 'Required';
    } else if (!/^[0-9]{4}$/i.test(values.graduationYear)) {
      errors.graduationYear = 'Invalid graduation year';
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
        <form className="academic-detail-form">
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
            <Field type="text" name="graduationYear" id="graduationYear" />
            <ErrorMessage name="graduationYear" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      )}
    </Formik>
  );
};
      
   
 

export default AcedemicDetails
