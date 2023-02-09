import React, { useState, useEffect } from "react";
//import car from "../../assets/images/auction/car/auction-1.jpg";

import car from "../assets/images/auction/car/auction-1.jpg"
// import realstate from "../../assets/images/auction/realstate/auction-1.png";
// import popular from "../../assets/images/auction/popular/auction-2.jpg";
//import banners1 from "../../assets/images/banners-01.png";
import banners1 from "../assets/images/banners-01.png"
import banners2 from "../assets/images/banners-02.png"
//import banners2 from "../../assets/images/banners-02.png";
import { FiClock } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import axios from "axios";
import HeaderFrist from "../components/header/HeaderFrist";
import HeaderSecound from "../components/header/HeaderSecound";

export default function CurrentAucViewPage(){
      const [currentData, setcurrentData] = useState([]);
      const [days, setDays] = useState(0);
      const [hours, setHours] = useState(0);
      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const deadline = "December, 31, 2022";
    
      const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };


      useEffect(() => {
            const interval = setInterval(() => getTime(deadline), 1000);
            return () => clearInterval(interval);
          }, []);
        
          useEffect(() => {
            axios
              .post(`http://192.168.29.28:5000/listauction`)
              .then((response) => {
                setcurrentData(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }, []);

       return(
            <>
            <HeaderFrist/>
            <HeaderSecound/>
            <div className="browse-section ash-bg">
      {/* <!--============= live Auction Section Starts Here =============--> */}
      <section className="live-auction-section padding-bottom pos-rel oh">
        {/* <!--  <div className="car-bg"><img src="assets/images/auction/car/car-bg.png" alt="car"></div> --> */}
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              {/* <!--  <div className="thumb">
                          <img src="assets/images/header-icons/car-1.png" alt="header-icons">
                      </div> --> */}
              {/* <div className="title-area">
                <h2 className="title">Current Auction</h2>
                <p>We offer affordable Vehicles</p>
              </div> */}
            </div>
            {/* <NavLink to="/CurrentAucViewPage" >
            <a href="#0" className="normal-button">
              View All
            </a>
            </NavLink> */}
          </div>
          <div className="row justify-content-center mb-30-none">
            {currentData.map((data) => {
              return (
                <>
                  <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        {/* <a href="#"> */}
                        <NavLink to="/Carinnerpages">
                          <img src={car} alt="car" />
                        </NavLink>
                        {/* </a> */}
                        <a href="#0" className="bid">
                          <i className="flaticon-auction"></i>
                          {/* <GiFlatHammer/> */}
                        </a>
                      </div>

                      <div className="auction-content">
                        <div className="countdown-area-new">
                          <i className="feather-clock"><FiClock /></i>
                          <div className="timer">
                            <span className="timer-div">{days < 10 ? days : days}d</span>
                            <span className="timer-div">{hours < 10 ? hours : hours}h</span>
                            <span className="timer-div">{minutes < 10 ? minutes : minutes}m</span>
                            <span className="timer-div">{seconds < 10 ? seconds : seconds}s</span>
                          </div>
                          <span className="amount">${data.startingBid}</span>
                        </div>
                        <h6 className="title">
                          <a href="product-details.html">{data.name}</a>
                        </h6>
                        <p>{data.discription}</p>

                        <div className="text-center">
                          <a href="#0" className="custom-button">
                            Submit a bid
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!--============= live Auction Section Ends Here =============--> */}

      {/* <section className="newbid-banner"> */}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-im-detail">
              <img src={banners1} />
              <div className="d-flex prod-container">
                <h3 className="mas-title text-white text-uppercase">
                  Furnitures
                </h3>
                <span className="fw-light text-white no ">150 Products</span>
                <a href="#" className="btn view-btn">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-im-detail">
              <img src={banners2} />
              <div className="d-flex prod-container">
                <h3 className="mas-title text-white text-uppercase">
                  Supercars
                </h3>
                <span className="fw-light text-white no ">150 Products</span>
                <a href="#" className="btn view-btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
          </>
       )
}