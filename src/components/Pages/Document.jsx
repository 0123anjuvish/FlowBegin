import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';

import { addDocument } from '../../Apis/student';

const Document = ({ onNext,studentId }) => {
    const [initialValues, setInitialValue] = useState({
     photo: '',
      adhar: '',
      marksheet: ''
    });
    
    const [photo, setphoto ]= useState("")
    const [adhar, setAdhar ]= useState("")
    const [marksheet, setmarksheet ]= useState("")

    const formData = new FormData();

      const handleFileChange = (event, setFieldValue, filename) => {
        setFieldValue(event.currentTarget.files[0] )
        console.log(event.currentTarget.files[0] )
        setInitialValue({filename:event.currentTarget.files[0]})
      };
        
      const handleSubmit = async()=>{
        const formData = new FormData();
       
        console.log("this is student id : " , studentId)
        formData.append('photo', photo);
        formData.append('marksheet', marksheet);
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
                <label htmlFor="photo" className="lbl-dox">Photo</label>
                <Field type="file" name="photo" id="photo" className="inpt-dox"  onChange={(event) => handleFileChange(event, setphoto,"photo")}/>
                <ErrorMessage name="photo" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="marksheet" className="lbl-dox">Marksheet</label>
                <Field type="file" name="marksheet" id="marksheet" className="inpt-dox1" onChange={(event) => handleFileChange(event, setmarksheet, "marksheet")}/>
                <ErrorMessage name="marksheet" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="transcript" className="lbl-dox">Adhar</label>
                <Field type="file" name="adhar" id="adhar" className="inpt-dox2"  onChange={(event) => handleFileChange(event, setAdhar, "adhar")}/>
                <ErrorMessage name="adhar" component="div" className="error-message" />
              </div>
    
              <button type="submit" disabled={isSubmitting}id='dox-btn'>Submit</button>
            </Form>
          )}
        </Formik>
      );
    };
    
   


export default Document;
