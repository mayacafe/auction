import React from "react";
import photo1 from "../../assets/images/auction/real-estate.png";
import photo2 from "../../assets/images/auction/car.png";
import photo3 from "../../assets/images/auction/double-bed.png";
import photo4 from "../../assets/images/auction/responsive.png";
import photo5 from "../../assets/images/auction/washer.png";
import photo6 from "../../assets/images/auction/ceiling-lamp.png";
import car from "../../assets/images/auction/car/auction-1.jpg";
import realstate from "../../assets/images/auction/realstate/auction-1.png";
import popular from "../../assets/images/auction/popular/auction-2.jpg";
import banners1 from "../../assets/images/banners-01.png";
import banners2 from "../../assets/images/banners-02.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";       
import { NavLink } from "react-router-dom";
export default function sectionBrowse() {
  return (
    <div className="browse-section ash-bg">
      {/* <!--============= Hightlight Slider Section Starts Here =============--> */}
      <div className="browse-slider-section">
        <div className="container">
          <div className="section-header-2 mb-4">
            <div className="left">
              <h6 className="title pl-0 w-100">Browse the highlights</h6>
            </div>
            <div className="slider-nav">
              <a href="#0" className="bro-prev">
                {/* <i className="flaticon-left-arrow"></i> */}
                <HiOutlineArrowNarrowLeft />
              </a>
              <a href="#0" className="bro-next active">
                {/* <i className="flaticon-right-arrow"></i> */}
                <HiOutlineArrowNarrowRight />
              </a>
            </div>
          </div>
          <div className="m--15">
            <OwlCarousel items={6} className=" browse-slider owl-carousel owl-theme" loop nav margin={0}>
              <a href="#0" className="browse-item">
                <img src={photo1} alt="auction" />
                <span className="info">Properties</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo2} alt="auction" />
                <span className="info">Vehicles</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo3} alt="auction" />
                <span className="info">Furniture</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo4} alt="auction" />
                <span className="info">Electronics</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo5} alt="auction" />
                <span className="info">Appliances</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo6} alt="auction" />
                <span className="info">Electrical</span>
              </a>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!--============= Hightlight Slider Section Ends Here =============--> */}

      {/* <!--============= live Auction Section Starts Here =============--> */}
      <section className="live-auction-section padding-bottom pos-rel oh">
        {/* <!--  <div className="car-bg"><img src="assets/images/auction/car/car-bg.png" alt="car"></div> --> */}
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              {/* <!--  <div className="thumb">
                          <img src="assets/images/header-icons/car-1.png" alt="header-icons">
                      </div> --> */}
              <div className="title-area">
                <h2 className="title">Current Auction</h2>
                <p>We offer affordable Vehicles</p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
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
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter26"></div>
                    <span className="amount">$876.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">2018 Hyundai Sonata</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>

                  <div className="text-center">
                  {/* <NavLink to=""> */}
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  {/* </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img src={realstate} alt="car" />
                  </a>

                  <a href="#0" className="bid">
                    <i className="flaticon-auction"></i>
                  </a>
                </div>
                <div className="auction-content">
                  <div className="countdown-area-new">
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter27"></div>
                    <span className="amount">$76.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">Apple Macbook Pro Laptop</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>

                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img src={popular} alt="car" />
                  </a>

                  <a href="#0" className="bid">
                    <i className="flaticon-auction"></i>
                  </a>
                </div>
                <div className="auction-content">
                  <div className="countdown-area-new">
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter28"></div>
                    <span className="amount">$876.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">Apartments</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>

                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img src={car} alt="car" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction"></i>
                  </a>
                </div>
                <div className="auction-content">
                  <div className="countdown-area-new">
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter26"></div>
                    <span className="amount">$876.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">2018 Hyundai Sonata</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>



                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img src={realstate} alt="car" />
                  </a>

                  <a href="#0" className="bid">
                    <i className="flaticon-auction"></i>
                  </a>
                </div>
                <div className="auction-content">
                  <div className="countdown-area-new">
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter27"></div>
                    <span className="amount">$76.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">Apple Macbook Pro Laptop</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>

                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img src={popular} alt="car" />
                  </a>

                  <a href="#0" className="bid">
                    <i className="flaticon-auction"></i>
                  </a>
                </div>
                <div className="auction-content">
                  <div className="countdown-area-new">
                    {/* <i className="feather-clock"></i> */}
                    <FiClock />
                    <div id="bid_counter28"></div>
                    <span className="amount">$876.00</span>
                  </div>
                  <h6 className="title">
                    <a href="product-details.html">Apartments</a>
                  </h6>
                  <p>Lorem ipsum dolor iset amar set</p>

                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--============= live Auction Section Ends Here =============--> */}

      {/* <section className="newbid-banner"> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-im-detail">
              <img src={banners1} />
              <div className="d-flex prod-container">
                <h3 className="mas-title text-white text-uppercase">Furnitures</h3>
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
                <h3 className="mas-title text-white text-uppercase">Supercars</h3>
                <span className="fw-light text-white no ">150 Products</span>
                <a href="#" className="btn view-btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
}
