import React from "react";
import photo from "../../assets/images/logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function HeaderSecound() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="index.html">
               <img src={photo} alt="logo" /> 
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <NavLink to="/About">
            <li>
              <a href="/About">About</a>
            </li>
            </NavLink>

            <NavLink to="/BrowseProduct">
            <li>
              <a href="/BrowseProduct">Browse Product</a>
            </li>
            </NavLink>

            <li>
              <a href="/AuctionDetails">Auction Details</a>
            </li>
            
            <NavLink to="/MyBid">
            <li>
              <a href="/MyBid">My Bid</a>
            </li>
            </NavLink>

            <NavLink to="/Contact">
            <li>
              <a href="/Contact">Contact</a>
            </li>
            </NavLink>

          </ul>
     
     
          {/* <ul className="search-button-area">
            <li>
              <form className="searchbar">
                <input
                  type="search"
                  placeholder="Search here"
                  name="search"
                  className="searchbar-input"
                  // onkeyup="buttonUp();"
                  required
                />
                <input type="submit" className="searchbar-submit" value="GO" />
                <span className="searchbar-icon">
                  <i className="feather-search" aria-hidden="true"> <FiSearch/></i>
                 
                </span>
              </form>
            </li>
          </ul> */}
          
        </div>
      </div>
    </div>
  );
}
