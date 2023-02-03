import React from "react";
import CardImages from "../components/header/CardImages";
import HeaderFrist from "../components/header/HeaderFrist";
import HeaderSecound from "../components/header/HeaderSecound";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function BrowseProduct() {
  return (
    <div>
      <HeaderFrist />
      <HeaderSecound />
      {/* <!--============= Hero Section Starts Here =============--> */}
      <div className="hero-section style-2">
        <div className="container">
          <h3>Products</h3>
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#0">Pages</a>
            </li>
            <li>
              <span>Vehicles</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--============= Hero Section Ends Here =============--> */}

      <div className="product-auction padding-bottom mt-20">
        <div className="container">
          <div className="product-header mb-40">
            <div className="product-header-item">
              <div className="item">Sort By : </div>
              <select name="sort-by" className="select-bar">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="type">Type</option>
                <option value="car">Car</option>
              </select>
            </div>
            <div className="product-header-item">
              <div className="item">Show : </div>
              <select name="sort-by" className="select-bar">
                <option value="09">09</option>
                <option value="21">21</option>
                <option value="30">30</option>
                <option value="39">39</option>
                <option value="60">60</option>
              </select>
            </div>
            <form className="product-search ml-auto">
              <input type="text" placeholder="Item Name" />
              <button type="submit">
                <i className="fas fa-search">
                  <FiSearch />
                </i>
              </button>
            </form>
          </div>
          <CardImages />
          <br />
          <CardImages />
          <br />
          <CardImages />
          <ul className="pagination">
            <li>
              <a href="#0">
                <i className="flaticon-left-arrow">
                  <HiOutlineArrowNarrowLeft />
                </i>
              </a>
            </li>
            <li>
              <a href="#0">1</a>
            </li>
            <li>
              <a href="#0" className="active">
                2
              </a>
            </li>
            <li>
              <a href="#0">3</a>
            </li>
            <li>
              <a href="#0">
                <i className="flaticon-right-arrow">
                  <HiOutlineArrowNarrowRight />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
