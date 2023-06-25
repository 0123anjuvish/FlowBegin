import React, { useState } from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import '../../styles/stuform.css';

const Document = ({ onNext }) => {
  const initialValues = {
    Photo: '',
    AdharCard: '',
    Marksheet: ''
  };

  const [photoPreview, setPhotoPreview] = useState(null);
  const [adharCardPreview, setAdharCardPreview] = useState(null);
  const [marksheetPreview, setMarksheetPreview] = useState(null);

  const handlePhotoChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue('Photo', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleAdharCardChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue('AdharCard', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdharCardPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAdharCardPreview(null);
    }
  };

  const handleMarksheetChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue('Marksheet', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMarksheetPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMarksheetPreview(null);
    }
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    onNext({ documents: values });
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.Photo) {
      errors.Photo = 'Required';
    }

    if (!values.AdharCard) {
      errors.AdharCard = 'Required';
    }

    if (!values.Marksheet) {
      errors.Marksheet = 'Required';
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue }) => (
        <Form className="upload-documents-form">
            <h4>Upload Documents</h4>
          <div className="form-group2">
            <label htmlFor="Photo" id="lbl-dox">Photo:</label>
            <input
              type="file"
              name="Photo"
              id="Photo"
              onChange={(e) => handlePhotoChange(e, setFieldValue)}
            />
            {photoPreview && <img src={photoPreview} alt="Photo Preview" className="document-preview" />}
            <ErrorMessage name="Photo" component="div" className="error-message" />
          </div>

          <div className="form-group2">
            <label htmlFor="AdharCard" id="lbl-dox">AdharCard:</label>
            <input
              type="file"
              name="AdharCard"
              id="AdharCard"
              onChange={(e) => handleAdharCardChange(e, setFieldValue)}
            />
            {adharCardPreview && (
              <img src={adharCardPreview} alt="AdharCard Preview" className="document-preview1" />
            )}
            <ErrorMessage name="AdharCard" component="div" className="error-message" />
          </div>

          <div className="form-group2">
            <label htmlFor="Marksheet" id="lbl-dox">Marksheet:</label>
            <input
              type="file"
              name="Marksheet"
              id="Marksheet"
              onChange={(e) => handleMarksheetChange(e, setFieldValue)}
            />
            {marksheetPreview && (
              <img src={marksheetPreview} alt="Marksheet Preview" className="document-preview2" />
            )}
            <ErrorMessage name="Marksheet" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting} id='dox-btn'>
            Save&Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Document;
