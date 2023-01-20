import React,{useState, useContext} from "react";
import axios from "axios";
import HeaderFrist from "./HeaderFrist";
import HeaderSecound from "./HeaderSecound";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export default function SignInPage() {

  // const authenticate = useContext(AuthContext);
  // const [serverState, setServerState] = useState();
  const handleOnSubmit = (values) => {
    axios({
      method: "POST",
      url: "http://192.168.29.28:5000/login",
      data: {
        "email":values.email,
       "password":values.password
      },
     
    })
    .then(response => {
      console.log(response.data)
      // actions.setSubmitting(false);
      // actions.resetForm();
      // handleServerResponse(true, "Logged In!");
    })
    .catch(error => {
      // actions.setSubmitting(false);
      // handleServerResponse(false, error.response.data.error);
      console.log(error.response.data)
    });
    // authenticate.login();
    // Router.push("/")
    
  };





  return (
    <div>
      <HeaderFrist />
      <HeaderSecound />
      {/* <!--============= Hero Section Starts Here =============--> */}
      <div className="hero-section">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#0">Pages</a>
            </li>
            <li>
              <span>Sign In</span>
            </li>
          </ul>
        </div>
        <div
          className="bg_img hero-bg bottom_center"
          data-background="assets/images/banner/hero-bg.png"
        ></div>
      </div>
      {/* <!--============= Hero Section Ends Here =============--> */}

      {/* <!--============= Account Section Starts Here =============--> */}
      <section className="account-section padding-bottom">
        <div className="container">
          <div className="account-wrapper mt-20">
            <div className="left-side">
              <div className="section-header">
                <h2 className="title">HI, THERE</h2>
                <p>You can log in to your Sbidu account here.</p>
              </div>
              <ul className="login-with">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook">
                      <RiFacebookCircleFill />
                    </i>
                    Log in with Facebook
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-google-plus">
                      <FaGooglePlus />
                    </i>
                    Log in with Google
                  </a>
                </li>
              </ul>
              <div className="or">
                <span>Or</span>
              </div>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  
                }}
                validationSchema={schema}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange, values, touched, errors }) => (
                  <Form className="login-form">
                    <div className="form-group mb-30">
                      <label>
                        <i className="far fa-envelope">
                          <FaRegEnvelope />
                        </i>
                      </label>
                      <input
                        type="text"
                        // id="login-email"
                        placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email ? (
                          <div className="form-err">{errors.email} *</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                      <label for="login-pass">
                        <i className="fas fa-lock">
                          <FaLock />
                        </i>
                      </label>
                      <input
                        type="password"
                        // id="login-pass"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                        {errors.password && touched.password ? (
                          <div className="form-err">{errors.password} *</div>
                        ) : null}
                      <span className="pass-type">
                        <i className="fas fa-eye">
                          <FaEye />
                        </i>
                      </span>
                    </div>
                    <div className="form-group">
                      <a href="#0">Forgot Password?</a>
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="custom-button">
                        LOG IN
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="right-side cl-white">
              <div className="section-header mb-0">
                <h3 className="title mt-0">NEW HERE?</h3>
                <p>Sign up and create your Account</p>
                <NavLink to="/SignUpPage">
                  <a href="#" className="custom-button transparent">
                    Sign Up
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--============= Account Section Ends Here =============--> */}
      <Footer />
    </div>
  );
}
