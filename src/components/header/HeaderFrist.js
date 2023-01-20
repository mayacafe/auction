import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function () {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul className="customer-support">
                <li>
                  <a href="#0" className="mr-3">
                    {/* <i className="fas fa-phone-alt"></i> */}
                    <FiPhone/>
                    <span className="ml-2 d-none d-sm-inline-block">
                      sale@modeltheme.com
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="cart-button-area">
                <li>
                  <a href="sign-in.html" className="user-button">
                    {/* <i className="feather-user"></i> */}
                    <NavLink to="/SignInPage">
                    <FiUser/>
                    </NavLink>
                  </a>
                </li>
                <li>
                  <select name="language" className="select-bar">
                    <option value="en">En</option>
                    <option value="Bn">Bn</option>
                    <option value="Rs">Rs</option>
                    <option value="Us">Us</option>
                    <option value="Pk">Pk</option>
                    <option value="Arg">Arg</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
