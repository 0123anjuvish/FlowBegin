import '../../styles/stuform.css';

import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import  { useEffect, useState } from 'react';

import React from 'react';
import { addPayments } from '../../Apis/student';

const PaymentDetails = ({ onNext, studentId }) => {
  
    const [error, setError] = useState()  
    const initialValues = {
    phone_number: '',
    payment_method: '',
    ammount: ''
  };
  
  const validateForm = values => {
    const errors = {};

    if (!values.phone_number) {
      errors.phone_number = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.phone_number)) {
      errors.phone_number = "Invalid phone_number number";
    }

    if (!values.payment_method) {
      errors.payment_method = 'Required';
    }

    if (!values.ammount) {
      errors.ammount = 'Required';
    }


    return errors;
  };
  const handleSubmit = async(data)=>{
    console.log("data",data)
      data.student = studentId
    const res = await addPayments(data);
    console.log('res',res)
    if (res.id){
    onNext({paymentDetails: res})
    }
    else {
      console.log("setting error")
      setError("Student doesnt exist")
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
            {error ? (   <div className="form-group">
            
            <label htmlFor="phone_number">PHONE NUMBER INVALID STUDNENT DOESNT EXIST</label>
 
          </div>):(null)}
         
               <div className="form-group">
                 <label htmlFor="phone_number">phone_number:</label>
                 <Field type="text" name="phone_number" id="phone_number" />
                 <ErrorMessage
                   name="phone_number"
                   component="div"
                   className="error-message"
                 />
               </div>

          <div className="form-group">
            <label htmlFor="payment_method">payment_method</label>
            <Field type="text" name="payment_method" id="payment_method" />
            <ErrorMessage name="payment_method" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="ammount">Ammount</label>
            <Field type="text" name="ammount" id="ammount" />
            <ErrorMessage name="ammount" component="div" className="error-message" />
          </div>  
          <button type="submit" >Submit</button>
        </Form>
      )}
    </Formik>
  );
};
      
   
 

export default PaymentDetails