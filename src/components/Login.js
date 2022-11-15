import React from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const initialvalues = {
        email: "",
        password: ""
      };

      
  const schema = Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters')
      
    });

    const navigate = useNavigate();

    const loginsubmit = (value) => {
      const Email =   localStorage.getItem("email")
      const Password =   localStorage.getItem("password")
         if(value.email === Email  && value.password === Password){
           alert('Logged In Successfull Click ok to Continue Profile Dashboard');
           navigate('/profile')
       }
       else{
        if(value.email === false  && value.password === false){
          alert('Oops! data not found click to ok and redirect to registration page')
          navigate('/signup')
        }
        else{
          alert('data not match')
          navigate('/login')
         }
       }  
      };
  return (
    <div className='section'>
    <div className="login-form bg-white m-4 shadow">
    <h1 className="text-center"><span>Login Here</span><br></br>
            <img src="login.png" alt="" />
          </h1>
        <Formik
          initialValues={initialvalues}
          validationSchema={schema}
          onSubmit={loginsubmit}
        >
        
          {({ errors, touched, resetForm }) => (
           
            <Form>
              
              

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
                <button type="submit" className="btn btn-primary">
                  Login
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

export default Login