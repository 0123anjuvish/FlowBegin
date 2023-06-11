// import React from "react";
// import { Formik, Field, ErrorMessage, FieldArray } from "formik";
// import "../../styles/stuform.css";

// const PersonalDetails = ({ onNext }) => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     fatherName: "",
//     motherName: "",
//     dateOfBirth: "",
//     courseName: "",
//     dateOfJoining: "",
//     gender: "",
//     phone: "",
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

//     if (!values.firstName) {
//       errors.firstName = "Required";
//     }

//     if (!values.lastName) {
//       errors.lastName = "Required";
//     }

//     if (!values.phone) {
//       errors.phone = "Required";
//     } else if (!/^[0-9]{10}$/i.test(values.phone)) {
//       errors.phone = "Invalid phone number";
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
//                 <label htmlFor="firstName">First Name:</label>
//                 <Field type="text" name="firstName" id="firstName" />
//                 <ErrorMessage
//                   name="firstName"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name:</label>
//                 <Field type="text" name="lastName" id="lastName" />
//                 <ErrorMessage
//                   name="lastName"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="fatherName">Father's Name:</label>
//                 <Field type="text" name="fatherName" id="fatherName" />
//                 <ErrorMessage
//                   name="fatherName"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="motherName">Mother's Name:</label>
//                 <Field type="text" name="motherName" id="motherName" />
//                 <ErrorMessage
//                   name="motherName"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="dateOfBirth">Date of Birth:</label>
//                 <Field type="date" name="dateOfBirth" id="dateOfBirth" />
//                 <ErrorMessage
//                   name="dateOfBirth"
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
//                 <Field name="courseName" type="text" />
//                 <ErrorMessage
//                   name="courseName"
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
//                 <label htmlFor="phone">Phone:</label>
//                 <Field type="text" name="phone" id="phone" />
//                 <ErrorMessage
//                   name="phone"
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

import React from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import "../../styles/stuform.css";

const PersonalDetails = ({ onNext }) => {
  const handleSubmit = (values) => {
    // Yahan par form submit hone par logic handle kijiye
    console.log(values,"handle submit called ")
    // onNext function ko call karke agle kadam me jaane ke liye form values ko pass kijiye
    
    onNext({ personalDetails: values });

    // setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", fatherName: "", motherName: "", dateOfBirth: "", courseName: "", dateOfJoining: "", gender: "", phone: "", address: "", hobbies: [] }}
      validate={validateForm}
    >
      {({ values, isSubmitting }) => (
        <form className="personal-detail-form">
          <div className="form-container">
            <div className="form-column1">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" name="firstName" id="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                 <label htmlFor="lastName">Last Name:</label>
                 <Field type="text" name="lastName" id="lastName" />
                 <ErrorMessage
                   name="lastName"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="fatherName">Father's Name:</label>
                 <Field type="text" name="fatherName" id="fatherName" />
                 <ErrorMessage
                   name="fatherName"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="motherName">Mother's Name:</label>
                 <Field type="text" name="motherName" id="motherName" />
                 <ErrorMessage
                   name="motherName"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="dateOfBirth">Date of Birth:</label>
                 <Field type="date" name="dateOfBirth" id="dateOfBirth" />
                 <ErrorMessage
                   name="dateOfBirth"
                   component="div"
                   className="error-message"
                 />
               </div>
               <div className="form-group-add">
                 <label htmlFor="address">Address:</label>
                 <Field as="textarea" name="address" id="address" rows="3" />
                 <ErrorMessage
                   name="address"
                   component="div"
                   className="error-message"
                 />
               </div>
             </div>

             <div className="form-column2">
               <div className="form-group">
                 <label>Course Name:</label>
                 <Field name="courseName" type="text" />
                 <ErrorMessage
                   name="courseName"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label>Date of Joining:</label>
                 <Field name="dateOfJoining" type="date" />
                 <ErrorMessage
                   name="dateOfJoining"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group-gender">
                 <label>Gender:</label>
                 <br />
                 <label>Male:</label>
                 <Field name="gender" value="male" type="radio" id="radio-m" />
                 <label>Female:</label>
                 <Field name="gender" value="female" type="radio" id="radio-f" />
                 <ErrorMessage
                   name="gender"
                   component="div"
                   className="error-message"
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="phone">Phone:</label>
                 <Field type="text" name="phone" id="phone" />
                 <ErrorMessage
                   name="phone"
                   component="div"
                   className="error-message"
                 />
               </div>

               <FieldArray
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
                         Add Hobbies
                       </button>
                     )}
                   </div>
                 )}
               />

             
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
