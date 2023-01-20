import React from "react";
import HeaderFrist from "../components/header/HeaderFrist";
import HeaderSecound from "../components/header/HeaderSecound";
import user from '../assets/images/faq/dashboard/user.png'
import auction1 from '../assets/images/auction/car/auction-1.jpg'
import popular from '../assets/images/auction/popular/auction-2.jpg'
import realstate from '../assets/images/auction/realstate/auction-1.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TiPencil } from "react-icons/ti";
import { RiDashboardLine } from "react-icons/ri";
import { BsStar } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
export default function MyBid() {
  return (
    <div>
      <HeaderFrist />
      <HeaderSecound />
      {/* <!--============= Hero Section Starts Here =============--> */}
      <div class="hero-section style-2">
        <div class="container">
          <ul class="breadcrumb">
            <li>
           <span>Home</span>&nbsp;
           <HiOutlineArrowNarrowRight/>&nbsp;
            </li>
            <li>
            <span>My Account</span>
            &nbsp;<HiOutlineArrowNarrowRight/>&nbsp;
            </li>
            <li>
             <span>My Bids</span>
            </li>
          </ul>
        </div>
        <div
          class="bg_img hero-bg bottom_center"
          data-background="assets/images/banner/hero-bg.png"
        ></div>
      </div>
      {/* <!--============= Hero Section Ends Here =============--> */}

      {/* <!--============= Dashboard Section Starts Here =============--> */}
  
       <section class="dashboard-section padding-bottom mt-20 pos-rel">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-sm-10 col-md-7 col-lg-4">
                    <div class="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                        <div class="user">
                            <div class="thumb-area">
                                <div class="thumb">
                                    <img src={user} alt="user"/>
                                </div>
                                <label for="profile-pic" class="profile-pic-edit">
                                    <TiPencil/></label>
                                <input type="file" id="profile-pic" class="d-none"/>
                            </div>
                            <div class="content">
                                <h5 class="title"><a href="#0">Percy Reed</a></h5>
                                <span class="username"><a href="https://pixner.net/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81ebeee9efc1e6ece0e8edafe2eeec">[email&#160;protected]</a></span>
                            </div>
                        </div>
                        <ul class="dashboard-menu">
                            <li>
                                <a href="dashboard.html"><i class="flaticon-dashboard"><RiDashboardLine/></i>Dashboard</a>
                            </li>
                            <li>
                                <a href="profile.html"><i class="flaticon-settings"></i>Personal Profile </a>
                            </li>
                            <li>
                                <a href="#0" class="active"><i class="flaticon-auction"></i>My Bids</a>
                            </li>
                            <li>
                                <a href="winning-bids.html"><i class="flaticon-best-seller"></i>Winning Bids</a>
                            </li>
                            <li>
                                <a href="notifications.html"><i class="flaticon-alarm"></i>My Alerts</a>
                            </li>
                            <li>
                                <a href="my-favorites.html"><i class="flaticon-star"><BsStar/></i>My Favorites</a>
                            </li>
                            <li>
                                <a href="referral.html"><i class="flaticon-shake-hand"></i>Referrals</a>
                            </li>
                        </ul>
                    </div>
                </div>
            




                <div class="col-lg-8">
                    <div class="dash-bid-item dashboard-widget mb-40-60">
                        <div class="header">
                            <h4 class="title">My Bids</h4>
                            <span class="notify"><i class="flaticon-alarm"></i> Manage Notifications</span>
                        </div>
                        <ul class="button-area nav nav-tabs">
                            <li>
                                <a href="#upcoming" data-toggle="tab" class="custom-button active">Upcoming</a>
                            </li>
                            <li>
                                <a href="#past" data-toggle="tab" class="custom-button">Past</a>
                            </li>
                        </ul>
                    </div>
                   
                    
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="upcoming">
                           <div class="row justify-content-center mb-30-none">
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={auction1} alt="car"/></a>
                               <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter32"></div>
                                    <span class="amount">$876.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">2018 Hyundai Sonata</a>
                                </h6>
                                <p>Lorem ipsum dolor iset amar set</p>
                               
                                
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={realstate} alt="car"/></a>
                               
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter33"></div>
                                    <span class="amount">$76.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">Apple Macbook Pro Laptop</a>
                                </h6>
                                 <p>Lorem ipsum dolor iset amar set</p>
                               
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={popular} alt="car"/></a>
                               
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                            <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter34"></div>
                                    <span class="amount">$876.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">Apartments</a>
                                </h6>
                                <p>Lorem ipsum dolor iset amar set</p>
                                
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={auction1} alt="car"/></a>
                               <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter35"></div>
                                    <span class="amount">$876.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">2018 Hyundai Sonata</a>
                                </h6>
                                <p>Lorem ipsum dolor iset amar set</p>
                               
                                
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={realstate} alt="car"/></a>
                               
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter36"></div>
                                    <span class="amount">$76.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">Apple Macbook Pro Laptop</a>
                                </h6>
                                 <p>Lorem ipsum dolor iset amar set</p>
                               
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6">
                        <div class="auction-item-2">
                            <div class="auction-thumb">
                                <a href="product-details.html"><img src={popular} alt="car"/></a>
                               
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                            <div class="countdown-area-new">
                                    <i class="feather-clock"><FaRegClock/></i>
                                    <div id="bid_counter37"></div>
                                    <span class="amount">$876.00</span>
                                </div>
                                <h6 class="title">
                                    <a href="product-details.html">Apartments</a>
                                </h6>
                                <p>Lorem ipsum dolor iset amar set</p>
                                
                                <div class="text-center">
                                    <a href="#0" class="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                      </div>
                   </div>
              </div>
              </div>
</div>
</div>
    </section>

      {/* <!--============= Dashboard Section Ends Here =============--> */}
      </div>
  );
}
