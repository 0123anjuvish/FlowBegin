import '../../styles/stuform.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { addPayments } from '../../Apis/student';
import Success from './Success';




const PaymentDetails = ({ onNext, studentId }) => {
  const [error, setError] = useState();
  const [submitted, setSubmitted] = useState(false); // Track whether the form has been submitted
  const initialValues = {
    phone_number: '',
    paymentMethod: '',
    ammount: '',
  };

  const validateForm = values => {
    const errors = {};

    if (!values.phone_number) {
      errors.phone_number = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.phone_number)) {
      errors.phone_number = "Invalid phone_number";
    }

    if (!values.paymentMethod) {
      errors.paymentMethod = 'Required';
    }

    if (!values.ammount) {
      errors.ammount = 'Required';
    }

    return errors;
  };

  const handleSubmit = async data => {
    console.log("data", data);
    data.student = studentId;
    const res = await addPayments(data);
    console.log('res', res);
    if (res.id) {
      setSubmitted(true); // Set the submitted state to true upon successful form submission
      onNext({ paymentDetails: res });
    } else {
      console.log("setting error");
      setError("Student doesn't exist");
    }
  };

  return (
    <div>
    {submitted ? (
      // Show the "Thanks" component when the form is successfully submitted
      <Success />
    ) : (
        // Render the form when the form is not submitted yet
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={values => {
            handleSubmit(values);
          }}
        >
         {({ values, isSubmitting }) => (
            <div className='pay-div'>
           <Form className="payment-detail-form">
             <h4 >Contribution</h4>
             {error ? (
               <div className="form-group">
                 <label htmlFor="phone_number" className='pay-lbl'>
                   PHONE NUMBER INVALID STUDENT DOESN'T EXIST
                 </label>
               </div>
             ) : null}
 
             <div className="form-group-pay">
               <label htmlFor="phone_number" className='pay-lbl'>Phone_Number:</label>
               <Field type="text" name="phone_number" id="phone_number" style={{ position: "relative", left: "5px" }} />
               <ErrorMessage
                 name="phone_number"
                 component="div"
                 className="error-message"
               />
             </div>
 
             <div className="form-group-pay">
               <label htmlFor="paymentMethod" className='pay-lbl'>paymentMethod:</label>
               <Field type="text" name="paymentMethod" id="paymentMethod" />
               <ErrorMessage name="paymentMethod" component="div" className="error-message" />
             </div>
 
             <div className="form-group-pay">
               <label htmlFor="ammount" className='pay-lbl'>ammount:</label>
               <Field type="text" name="ammount" id="ammount" style={{ position: "relative", left: "45px" }} />
               <ErrorMessage name="ammount" component="div" className="error-message" />
             </div>
             <button type="submit" id='pay-btn'>Submit</button>
           </Form>
         </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default PaymentDetails;
