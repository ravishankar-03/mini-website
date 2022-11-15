import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import '../../src/SignUp.css'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const SignUp = () => {
    const initialvalues = {
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: '',
        checkbox: false,
      };

      
  const schema = Yup.object({
      fullName: Yup.string().required('Fullname is required'),
      userName: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      checkbox: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });

    
    
   const navigate = useNavigate();

    const sendsubmit = (value) => {
     const url = 'http://localhost:3001/profile'
        localStorage.setItem("fullName",value.fullName)
        localStorage.setItem("userName",value.userName)
        localStorage.setItem("email",value.email)
        localStorage.setItem("password",value.password)
        console.log(value);
       
        Axios.post(url,{
              "fullName":value.fullName,
              "userName":value.userName,
              "email":value.email,
              "password":value.password,
        }).then((res) =>{
           console.log(res);
           alert('Regitration Successfull ! Click ok to Continue Login');
           navigate('/login')
        }).catch((err)=>{
          console.log(err);
        });
       
    
    
      };

  return (
    <div className='section'>
    <div className="register-form bg-white m-4 shadow">
    <h1 className="text-center"><span>Registration Form</span><br></br>
            <img src="man.png" alt="" />
          </h1>
        <Formik
          initialValues={initialvalues}
          validationSchema={schema}
          onSubmit={sendsubmit}
        >
        
          {({ errors, touched, resetForm }) => (
           
            <Form>
            <div className='row'>
              <div className="form-group col-6">
                <label>Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  className={
                    'form-control' +
                    (errors.fullName && touched.fullName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="userName"> Username </label>
                <Field
                  name="userName"
                  type="text"
                  className={
                    'form-control' +
                    (errors.userName && touched.userName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              </div>

              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <Field
                  name="email"
                  type="email"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <Field
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group form-check">
                <Field
                  name="checkbox"
                  type="checkbox"
                  className={
                    'form-check-input' +
                    (errors.checkbox && touched.checkbox
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label htmlFor="checkbox" className="form-check-label">
                  I have read and agree to the Terms
                </label>
                <ErrorMessage
                  name="checkbox"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-warning float-end"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>
  )
}

export default SignUp