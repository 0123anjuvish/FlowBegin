import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';

import { addDocument } from '../../Apis/student';

const Document = ({ onNext,studentId }) => {
    const [initialValues, setInitialValue] = useState({
      passport: '',
      adhar: '',
      resume: ''
    });
    
    const [passport, setPassport ]= useState("")
    const [adhar, setAdhar ]= useState("")
    const [resume, setResume ]= useState("")

    const formData = new FormData();

      const handleFileChange = (event, setFieldValue, filename) => {
        setFieldValue(event.currentTarget.files[0] )
        console.log(event.currentTarget.files[0] )
        setInitialValue({filename:event.currentTarget.files[0]})
      };
        
      const handleSubmit = async()=>{
        const formData = new FormData();
        console.log("this is student id : " , studentId)
        formData.append('passport', passport);
        formData.append('resume', resume);
        formData.append('adhar', adhar);
        formData.append('student', parseInt(studentId));
        if (studentId)
       { const res = await addDocument(formData);
        console.log("res",res)
        {onNext({documents: res})} 

      }
      }
    
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({isSubmitting }) => (
            <Form className="upload-documents-form" enctype="multipart/form-data">
              <div className="form-group">
                <label htmlFor="passport">Passport</label>
                <Field type="file" name="passport" id="passport"  onChange={(event) => handleFileChange(event, setPassport,"passport")}/>
                <ErrorMessage name="passport" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <Field type="file" name="resume" id="resume"  onChange={(event) => handleFileChange(event, setResume, "resume")}/>
                <ErrorMessage name="resume" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="transcript">adhar</label>
                <Field type="file" name="adhar" id="adhar"  onChange={(event) => handleFileChange(event, setAdhar, "adhar")}/>
                <ErrorMessage name="adhar" component="div" className="error-message" />
              </div>
    
              <button type="submit" disabled={isSubmitting} >Submit</button>
            </Form>
          )}
        </Formik>
      );
    };
    
   


export default Document