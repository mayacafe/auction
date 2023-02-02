import React from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Circles } from "react-loader-spinner";
import HeaderFrist from "./HeaderFrist";
import HeaderSecound from "./HeaderSecound";
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("User Name is Required"),
  phoneno: Yup.string().required(" Phone Number is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function SignUpPage() {
 
  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress)

  const handleOnSubmit = (values) => {
    trackPromise(
      axios({
        method: "POST",
        url: " http://192.168.29.28:5000/register",
        data: {
          fullname: values.fullname,
          mobileno: values.phoneno,
          email: values.email,
          password: values.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          showToastMessage(response.data.message);
        })
        .catch((error) => {
          console.log(error.response.data);
        })
    );
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
              <span>Sign Up</span>
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
                <h2 className="title">SIGN UP</h2>
                <p>We're happy you're here!</p>
              </div>

              { (promiseInProgress === true) ?
              <div className="loader">
               <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
             </div>
              :
              <Formik
                initialValues={{
                  fullname: "",
                  phoneno: "",
                  email: "",
                  password: "",
                  confirmpassword: "",
                }}
                validationSchema={schema}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange, values, touched, errors, isSubmitting }) => (
                  <Form className="login-form">
                    <div className="form-group mb-30">
                      <label for="login-fullname">
                        <i className="far fa-envelope">
                          <FiUser />
                        </i>
                      </label>
                      <input
                        type="text"
                        placeholder="User Name"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname && touched.fullname ? (
                        <div className="form-err">{errors.fullname} *</div>
                      ) : null}
                    </div>
                    <div className="form-group mb-30">
                      <label for="login-email">
                        <i className="far fa-envelope">
                          <FaRegEnvelope />
                        </i>
                      </label>
                      <input
                        type="text"
                        id="login-email"
                        placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email ? (
                        <div className="form-err">{errors.email} *</div>
                      ) : null}
                    </div>

                    <div className="form-group mb-30">
                      <label for="login-phoneno">
                        <i className="far fa-envelope">
                          <FiPhone />
                        </i>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phoneno"
                        value={values.phoneno}
                        onChange={handleChange}
                      />
                      {errors.phoneno && touched.phoneno ? (
                        <div className="form-err">{errors.phoneno} *</div>
                      ) : null}
                    </div>

                    <div className="form-group mb-30">
                      <label for="login-pass">
                        <i className="fas fa-lock">
                          <FaLock />
                        </i>
                      </label>
                      <input
                        type="password"
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

                    <div className="form-group mb-30">
                      <label for="login-pass">
                        <i className="fas fa-lock">
                          <FaLock />
                        </i>
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChange}
                      />
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <div className="form-err">
                          {errors.confirmpassword} *
                        </div>
                      ) : null}
                      <span className="pass-type">
                        <i className="fas fa-eye">
                          <FaEye />
                        </i>
                      </span>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="custom-button"
                        disabled={isSubmitting}
                      >
                        SIGN UP
                      </button>
                      <ToastContainer />
                    </div>
                  </Form>
                )}
              </Formik>
               }
            </div>
            <div className="right-side cl-white">
              <div className="section-header mb-0">
                <h3 className="title mt-0">ALREADY HAVE AN ACCOUNT?</h3>
                <p>Log in and go to your Dashboard.</p>
                <NavLink to="/SignInPage">
                  <a href="#" className="custom-button transparent">
                    Login
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
