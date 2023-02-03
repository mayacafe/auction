import React from "react";
import HeaderFrist from "../components/header/HeaderFrist";
import HeaderSecound from "../components/header/HeaderSecound";
import about1 from "../assets/images/about/01.png";
import about2 from "../assets/images/about/02.png";
import about from "../assets/images/about/about.png";
import overview1 from "../assets/images/overview/01.png";
import overview2 from "../assets/images/overview/02.png";
import overview3 from "../assets/images/overview/03.png";
import overview4 from "../assets/images/overview/04.png";
import overview5 from "../assets/images/overview/05.png";
import overview6 from "../assets/images/overview/06.png";
import ClientSection from "../components/header/ClientSection";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Footer from "../components/header/Footer";
//import overview from '../assets/images/overview/overview-bg.png'
export default function About() {
  return (
    <div>
      <HeaderFrist />
      <HeaderSecound />
      <div className="hero-section">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <span>Home</span>&nbsp;
              <HiOutlineArrowNarrowRight />
              &nbsp;
            </li>
            <li>
              <span>Pages</span>
              &nbsp;
              <HiOutlineArrowNarrowRight />
              &nbsp;
            </li>
            <li>
              <span>About Us</span>
            </li>
          </ul>
        </div>
        <div
          className="bg_img hero-bg bottom_center"
          data-background="assets/images/banner/hero-bg.png"
        ></div>
      </div>

      {/* <!--============= About Section Starts Here =============--> */}
      <section className="about-section">
        <div className="container">
          <div className="about-wrapper mt-20">
            <div className="row">
              <div className="col-lg-7 col-xl-6">
                <div className="about-content pt-20">
                  {/* <!--  <h4 className="subtitle">About Us</h4> --> */}
                  <h2 className="title">
                    <span className="d-block">OVER 60</span> YEARS EXPERIENCE
                  </h2>
                  <p>Innovation have made us leaders in auctions platform</p>
                  <div className="item-area">
                    <div className="item">
                      <div className="thumb">
                        <img src={about1} alt="about" />
                      </div>
                      <p>award-winning team</p>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src={about2} alt="about" />
                      </div>
                      <p>AFFILIATIONS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-thumb">
              <img src={about} alt="about" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--============= About Section Ends Here =============--> */}

      {/* <!--============= Counter Section Starts Here =============--> */}
      <div className="counter-section padding-top mt--10">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <h3 className="counter-header">
                  <span className="title counter">62</span>
                  <span className="title">M</span>
                </h3>
                <p>ITEMS AUCTIONED</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <h3 className="counter-header">
                  <span>$</span>
                  <span className="title counter">887</span>
                  <span className="title">M</span>
                </h3>
                <p>IN SECURE BIDS</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <h3 className="counter-header">
                  <span className="title counter">63</span>
                  <span className="title">M</span>
                </h3>
                <p>ITEMS AUCTIONED</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <h3 className="counter-header">
                  <span>0</span>
                  <span className="title counter">5</span>
                  <span className="title">K</span>
                </h3>
                <p>AUCTION EXPERTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--============= Counter Section Ends Here =============--> */}

      {/* <!--============= Overview Section Starts Here =============--> */}
      <section className="overview-section padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="overview-content">
                <div className="section-header text-lg-left">
                  <h2 className="title">What can you expect?</h2>
                  <p>
                    Voluptate aut blanditiis accusantium officiis expedita
                    dolorem inventore odio reiciendis obcaecati quod nisi quae
                  </p>
                </div>
                <div className="row mb--50">
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview1} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Real-time Auction</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview2} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Supports Multiple Currency</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview3} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Winner Announcement</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview4} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Supports Multiple Currency</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview5} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Show all bidders history</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="expert-item">
                      <div className="thumb">
                        <img src={overview6} alt="overview" />
                      </div>
                      <div className="content">
                        <h6 className="title">Add to watchlist</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-30 pr-0">
              <div
                className="w-100 h-100 bg_img"
                data-background="assets/images/overview/overview-bg.png"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <ClientSection />
      {/* <!--============= Overview Section Ends Here =============--> */}
      <Footer />
    </div>
  );
}
