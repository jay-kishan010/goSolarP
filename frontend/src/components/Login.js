import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Login.css'
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import logo from '../img/go solar.png'
import solar from '../img/solar panel.jpg'
import {useFormik} from "formik";
import Swal from "sweetalert2";



function Login() {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm({values:" "});
    }
  //   onSubmit: async (values) => {
  //     console.log(values);
  //     const res = await fetch("http://localhost:5000/user/authenticate",{
  //       method:"POST",
  //       body:JSON.stringify(values),
  //       headers:{
  //         'Content-Type':"application/json"
  //       }
  //      })
  //      console.log(res.status);
  //      if(res.status===200)
  //      {
  //       Swal.fire({
  //         icon:"success",
  //            title:"Nice",
  //            text:"you have successfull logged in",

  //       });

  //      }
  //      else if(res.status===401){
  //       Swal.fire({
  //         icon:"error",
  //         title:"Error!",
  //         text:"invalid credentials"
  //       })
      //  }
    
  });
  return (
    <MDBContainer fluid>
      <MDBRow>
      <MDBCol sm='6' className='d-none d-sm-block px-0 '>
          <img src={solar}
            alt="Login image" className="w-100 img-fluid" style={{objectFit: 'cover',height:"100vh", objectPosition: 'left'}} />
       
       <div className='mask' style={{ height:"100vh", width:"50%", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="h-100">
        <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
          <h1 className='text-white mb-0 d-flex align-items-center justify-content-center'>Welcome</h1>
          <p className='text-white mb-0 align-middle text-center'>Don't have registration yet?</p>
          <button className="btn btn-warning btn-rounded">REGISTER</button>
        </div>
        </div>
        </div>
         </MDBCol>

        <MDBCol sm='6' >

          {/* <div className='d-flex flex-row ps-5 pt-5'> */}
            {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span> */}
          {/* </div> */}
          
              
          <form className=' d-flex justify-content-center' onSubmit={loginForm.handleSubmit}>

          {/* d-flex justify-content-center */}
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-3'>
            <div className="text-center m-4 p-4 ">
            <img  className="d-block mx-auto img-fluid w-55  mb-4" src={logo} alt=""   />
            </div>

            {/* <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3> */}
            {/* <MDBIcon fas icon="envelope" /> */}
            <MDBInput   type="email"
                        id="email"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                         wrapperClass='mb-4 mx-5 w-70'
                          icon="envelope"
                           label='Email address'  className="form-control form-control-lg" size="lg"/>
           
            <MDBInput 
             type="password"
             id="password"
             value={loginForm.values.password}
             onChange={loginForm.handleChange}
             className="form-control form-control-lg"
            wrapperClass='mb-4 mx-5 w-70' label='Password'  size="lg"/>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <MDBBtn  type="submit" className="mb-4 px-5 mx-5 w-70" color='warning' size='lg'>Login</MDBBtn>

            {/* <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p> */}

          </div>
          </form>
          
 {/* </Formik> */}
        </MDBCol>
       


      </MDBRow>

    </MDBContainer>
  );
}

export default Login;