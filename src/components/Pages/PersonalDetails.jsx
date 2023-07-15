// import React from "react";
// import { Formik, Field, ErrorMessage, FieldArray } from "formik";
// import "../../styles/stuform.css";

// const PersonalDetails = ({ onNext }) => {
//   const initialValues = {
//     first_name: "",
//     last_name: "",
//     father_name: "",
//     mother_name: "",
//     dob: "",
//     course: "",
//     dateOfJoining: "",
//     gender: "",
//     phone_number: "",
//     address: "",
//     hobbies: [],
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     // Yahan par form submit hone par logic handle kijiye
//     console.log(values);

//     // onNext function ko call karke agle kadam me jaane ke liye form values ko pass kijiye
//     onNext(values);

//     setSubmitting(false);
//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.first_name) {
//       errors.first_name = "Required";
//     }

//     if (!values.last_name) {
//       errors.last_name = "Required";
//     }

//     if (!values.phone_number) {
//       errors.phone_number = "Required";
//     } else if (!/^[0-9]{10}$/i.test(values.phone_number)) {
//       errors.phone_number = "Invalid phone_number number";
//     }

//     return errors;
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validateForm}
//       onSubmit={handleSubmit}
//     >
//       {({ values, isSubmitting }) => (
//         <form className="personal-detail-form">
//           <div className="form-container">
//             <div className="form-column1">
//               <div className="form-group">
//                 <label htmlFor="first_name">First Name:</label>
//                 <Field type="text" name="first_name" id="first_name" />
//                 <ErrorMessage
//                   name="first_name"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="last_name">Last Name:</label>
//                 <Field type="text" name="last_name" id="last_name" />
//                 <ErrorMessage
//                   name="last_name"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="father_name">Father's Name:</label>
//                 <Field type="text" name="father_name" id="father_name" />
//                 <ErrorMessage
//                   name="father_name"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="mother_name">Mother's Name:</label>
//                 <Field type="text" name="mother_name" id="mother_name" />
//                 <ErrorMessage
//                   name="mother_name"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="dob">Date of Birth:</label>
//                 <Field type="date" name="dob" id="dob" />
//                 <ErrorMessage
//                   name="dob"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>
//               <div className="form-group-add">
//                 <label htmlFor="address">Address:</label>
//                 <Field as="textarea" name="address" id="address" rows="3" />
//                 <ErrorMessage
//                   name="address"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>
//             </div>

//             <div className="form-column2">
//               <div className="form-group">
//                 <label>Course Name:</label>
//                 <Field name="course" type="text" />
//                 <ErrorMessage
//                   name="course"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Date of Joining:</label>
//                 <Field name="dateOfJoining" type="date" />
//                 <ErrorMessage
//                   name="dateOfJoining"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group-gender">
//                 <label>Gender:</label>
//                 <br />
//                 <label>Male:</label>
//                 <Field name="gender" value="male" type="radio" id="radio-m" />
//                 <label>Female:</label>
//                 <Field name="gender" value="female" type="radio" id="radio-f" />
//                 <ErrorMessage
//                   name="gender"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone_number">phone_number:</label>
//                 <Field type="text" name="phone_number" id="phone_number" />
//                 <ErrorMessage
//                   name="phone_number"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <FieldArray
//                 name="hobbies"
//                 render={(arrayHelpers) => (
//                   <div>
//                     {values.hobbies && values.hobbies.length > 0 ? (
//                       values.hobbies.map((hobby, index) => (
//                         <div key={index}>
//                           <Field name={`hobbies.${index}`} />
//                           <button
//                             type="button"
//                             onClick={() => arrayHelpers.remove(index)}
//                           >
//                             -
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => arrayHelpers.insert(index, "")}
//                           >
//                             +
//                           </button>
//                         </div>
//                       ))
//                     ) : (
//                       <button
//                         type="button"
//                         onClick={() => arrayHelpers.push("")}
//                       >
//                         Add Hobbies
//                       </button>
//                     )}
//                   </div>
//                 )}
//               />
//             </div>
//           </div>

//           <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default PersonalDetails;

import "../../styles/stuform.css";
import {  } from "../../Apis/student";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import  { useEffect, useState } from 'react';

import React from "react";
import { addStudent } from "../../Apis/student";
import { getCourse } from "../../Apis/course";

const PersonalDetails = ({ onNext }) => {
  const [course ,setCouse] = useState([])

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const res = await getCourse();
        console.log("res", res);
        setCouse(res);
      } catch (error) {
        console.error("Error loading course:", error);
      }
    };

    loadCourse();
  }, []);
  
  const validateForm = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Required";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    }

    if (!values.phone_number) {
      errors.phone_number = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.phone_number)) {
      errors.phone_number = "Invalid phone_number number";
    }

    return errors;
  };
  const handleSubmit = async(data)=>{
    console.log("data",data)
    const res = await addStudent(data);
    console.log('res',res)
    onNext({personalDetails: res})
  }

  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", father_name: "", mother_name: "", dob: "", course: "", dateOfJoining: "", gender: "", phone_number: "", address: "", }}
      validate={validateForm}
      onSubmit={values => {
        // same shape as initial values
        handleSubmit(values)
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="personal-detail-form">
          <div className="form-container">
            <div className="form-column1">
              <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <Field type="text" name="first_name" id="first_name" />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                 <label htmlFor="last_name">Last Name:</label>
                 <Field type="text" name="last_name" id="last_name" />
                 <ErrorMessage
                   name="last_name"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="father_name">Father's Name:</label>
                 <Field type="text" name="father_name" id="father_name" />
                 <ErrorMessage
                   name="father_name"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="mother_name">Mother's Name:</label>
                 <Field type="text" name="mother_name" id="mother_name" />
                 <ErrorMessage
                   name="mother_name"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="dob">Date of Birth:</label>
                 <Field type="date" name="dob" id="dob"  inputProps={{ format: 'yyyy-MM-dd' }}/>
                 <ErrorMessage
                   name="dob"
                   component="div"
                   className="error-message"
                 />
               </div>
              
             </div>

             <div className="form-column2">
               <div className="form-group">
                 <label>Course Name :</label>
                 <Field as="select" name="color">
                {
                  course && course.map((val) => (
                    <option key={val.id} value={val.id}>{val.name}</option>
                  ))
                }
                </Field>
                 <ErrorMessage
                   name="course"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group-gender">
                 <label>Gender:</label>
                 <br />
                 <label>Male:</label>
                 <Field name="gender" value="true" type="radio" id="radio-m" />
                 <label>Female:</label>
                 <Field name="gender" value="false" type="radio" id="radio-f" />
                 <ErrorMessage
                   name="gender"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="phone_number">phone_number:</label>
                 <Field type="text" name="phone_number" id="phone_number" />
                 <ErrorMessage
                   name="phone_number"
                   component="div"
                   className="error-message"
                 />
               </div>

               {/* <FieldArray
                 name="hobbies"
                 render={(arrayHelpers) => (
                   <div>
                     {values.hobbies && values.hobbies.length > 0 ? (
                       values.hobbies.map((hobby, index) => (
                         <div key={index}>
                           <Field name={`hobbies.${index}`} />
                           <button
                             type="button"
                             onClick={() => arrayHelpers.remove(index)}
                           >
                             -
                           </button>
                           <button
                             type="button"
                             onClick={() => arrayHelpers.insert(index, "")}
                           >
                             +
                           </button>
                         </div>
                       ))
                     ) : (
                       <button
                         type="button"
                         onClick={() => arrayHelpers.push("")}
                       >
                         Add Courses
                       </button>
                     )}
                   </div>
                 )}
               /> */}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
