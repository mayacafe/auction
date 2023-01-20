import React from 'react'
import photo1 from "../../assets/images/logo/logo.png";
import photo2 from "../../assets/images/footer/paypal.png";
import photo3 from "../../assets/images/footer/visa.png";
import photo4 from "../../assets/images/footer/discover.png";
import photo5 from "../../assets/images/footer/mastercard.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBlenderPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="bg_img padding-top oh">
      <div className="footer-top padding-bottom ">

          <div className="container">
          <div className="newslater-wrapper">
          <div className="container">
              <div className="newslater-area">
                 
                  <div className="newslater-content">
                      <div className="section-header mb-low">
                         
                          <h3 className="title">To Get Exclusive Benefits</h3>
                      </div>
                      <form className="subscribe-form">
                          <input type="text" placeholder="Enter Your Email" name="email"/>
                          <button type="submit" className="custom-button">Subscribe</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
              <div className="row mb--60">
                  <div className="col-sm-6 col-lg-3">
                      <div className="footer-widget widget-links">
                          <h5 className="title">Auction Categories</h5>
                          <ul className="links-list">
                              <li>
                                  <a href="#0">Ending Now</a>
                              </li>
                              <li>
                                  <a href="#0">Vehicles</a>
                              </li>
                              <li>
                                  <a href="#0">Watches</a>
                              </li>
                              <li>
                                  <a href="#0">Electronics</a>
                              </li>
                              <li>
                                  <a href="#0">Real Estate</a>
                              </li>
                              
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="footer-widget widget-links">
                          <h5 className="title">About Us</h5>
                          <ul className="links-list">
                              <li>
                                  <a href="#0">About Sbidu</a>
                              </li>
                              <li>
                                  <a href="#0">Help</a>
                              </li>
                              <li>
                                  <a href="#0">Affiliates</a>
                              </li>
                              <li>
                                  <a href="#0">Jobs</a>
                              </li>
                              
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="footer-widget widget-links">
                          <h5 className="title">We're Here to Help</h5>
                          <ul className="links-list">
                              <li>
                                  <a href="#0">Your Account</a>
                              </li>
                              <li>
                                  <a href="#0">Safe and Secure</a>
                              </li>
                              <li>
                                  <a href="#0">Shipping Information</a>
                              </li>
                              <li>
                                  <a href="#0">Contact Us</a>
                              </li>
                              <li>
                                  <a href="#0">Help & FAQ</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="footer-widget widget-follow">
                          <h5 className="title">Follow Us</h5>
                          <ul className="links-list">
                              <li>
                                  <a href="#0"><BsFillTelephoneFill/>(646) 663-4575</a>
                              </li>
                              <li>
                                  <a href="#0"><FaBlenderPhone/>(646) 968-0608</a>
                              </li>
                              <li>
                                  <a href="#0"><FaEnvelopeOpenText/><span className="__cf_email__" data-cfemail="630b060f1323060d040c170b060e064d000c0e">[email&#160;protected]</span></a>
                              </li>
                              <li>
                                  <a href="#0"><FaLocationArrow/>1201 Broadway Suite</a>
                              </li>
                          </ul>
                          <ul className="social-icons">
                              <li>
                                  <a href="#0" className="active"><GrFacebookOption/></a>
                              </li>
                              <li>
                                  <a href="#0"><AiOutlineTwitter/></a>
                              </li>
                              <li>
                                  <a href="#0"><AiOutlineInstagram/></a>
                              </li>
                              <li>
                                  <a href="#0"><RiLinkedinFill/></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer-bottom">
          <div className="container">
              <div className="copyright-area">
                  <div className="footer-bottom-wrapper">
                      <div className="logo">
                          <a href="index.html"><img src={photo1} alt="logo"/></a>
                      </div>
                      <ul className="gateway-area">
                          <li>
                              <a href="#0"><img src={photo2} alt="footer"/></a>
                          </li>
                          <li>
                              <a href="#0"><img src={photo3} alt="footer"/></a>
                          </li>
                          <li>
                              <a href="#0"><img src={photo4} alt="footer"/></a>
                          </li>
                          <li>
                              <a href="#0"><img src={photo5} alt="footer"/></a>
                          </li>
                      </ul>
                      <div className="copyright"><p>&copy; Copyright 2022 </p></div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}
