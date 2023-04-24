import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Formik } from "formik";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
    name:Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .max(40).min(2)
      .required(),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, { message: "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  })
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
       .required("Required"),
  cpassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});




function App() {
  return (
    <>
     {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
     <Formik
        validationSchema={schema}
        initialValues={{name:"", email: "", password: "",cpassword:"" }}
        onSubmit={(values,{resetForm}) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
          resetForm({values:""});
        }}
        >
            
   {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
        <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody  >
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

      <form noValidate onSubmit={handleSubmit}>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name'  type='text' className='w-100' name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  id="name"
                
                
                />
              </div>
              <p className="error text-danger" >
              {errors.name && touched.name && errors.name}
                </p>
             

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email'
                  type='email'
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                />
              </div>
                {/* If validation is not passed show errors */}
                <p className="error text-danger" >
                  {errors.email && touched.email && errors.email}
                </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='password' type='password'
                //  type="password"
                 name="password"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.password}

                />
              </div>
              <p className="error text-danger" >
                  {errors.password && touched.password && errors.password}
                </p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='cpassword' type='password'
                
                name="cpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpassword}
                />
              </div>
              <p className="error text-danger" >
                  {errors.cpassword && touched.cpassword && errors.cpassword}
                </p>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

        </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
        )}

        </Formik>
        </>
  );
}

export default App;