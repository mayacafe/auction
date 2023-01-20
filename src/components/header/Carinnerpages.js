import React from 'react'
import HeaderFrist from './HeaderFrist'
import HeaderSecound from './HeaderSecound'
import photo1 from "../../assets/images/product/product1.png";
import photo2 from "../../assets/images/product/product2.png";
import photo3 from "../../assets/images/product/product3.png";
import photo4 from "../../assets/images/product/product4.png";
import photo5 from "../../assets/images/product/product5.png";
import photo6 from "../../assets/images/product/product6.png";
import search from "../../assets/images/product/search-icon.png";
import product1 from "../../assets/images/product/01.png";
import product2 from "../../assets/images/product/02.png";
import product3 from "../../assets/images/product/03.png";
import product4 from "../../assets/images/product/04.png";
import product5 from "../../assets/images/product/05.png";
import product6 from "../../assets/images/product/06.png";
import tab1 from "../../assets/images/product/tab1.png";
import tab2 from "../../assets/images/product/tab2.png";
import tab3 from "../../assets/images/product/tab3.png";
import tab4 from "../../assets/images/product/tab4.png";
import history1 from "../../assets/images/history/01.png";
import history2 from "../../assets/images/history/02.png";
import history3 from "../../assets/images/history/03.png";
import history4 from "../../assets/images/history/04.png";
import history5 from "../../assets/images/history/05.png";
import faq from "../../assets/css/img/faq.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";   
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { BsGift } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
export default function carinnerpages() {
  return (
   <>
   <HeaderFrist/>
   <HeaderSecound/>
   <div class="hero-section style-2">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    {/* <a href="index.html">Home</a>  */}
                 <span>Home</span>   <span><HiOutlineArrowNarrowRight/></span>
                </li>
                <li>
                    {/* <a href="#0">Pages</a> */}
                    <span>Pages</span><span><HiOutlineArrowNarrowRight/></span>
                </li>
                <li>
                    <span>Vehicles</span>
                </li>
            </ul>
        </div>
        <div class="bg_img hero-bg bottom_center" data-background="assets/images/banner/hero-bg.png"></div>
    </div>
    
    {/* <!--============= Product Details Section Starts Here =============--> */}
    
    <section class="product-details padding-bottom mt-20">
        <div class="container">
            <div class="product-details-slider-top-wrapper">
                {/* <div class="product-details-slider owl-theme owl-carousel" id="sync1"> */}
                <OwlCarousel items={1} className="  owl-theme" loop nav margin={0}>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo1} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo2} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo3} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo4} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo5} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-top-item">
                        <div class="slide-inner">
                            <img src={photo6} alt="product"/>
                        </div>
                    </div>
                </OwlCarousel>
                {/* </div> */}

            </div>
            <div class="product-details-slider-wrapper">
                {/* <div class="product-bottom-slider owl-theme owl-carousel" id="sync2"> */}
                <OwlCarousel items={6} className=" product-bottom-slider owl-carousel owl-theme"  margin={0}>

                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product1} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product2} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product3} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product4} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product5} alt="product"/>
                        </div>
                    </div>
                    <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img src={product6} alt="product"/>
                        </div>
                    </div>
                </OwlCarousel>
                {/* </div> */}

                <span class="det-prev det-nav">
                  <RiArrowLeftSLine/>
                </span>
                <span class="det-next det-nav active">
                <RiArrowRightSLine/>
                </span>
            </div>
            <div class="row mt-40-60-80">
                <div class="col-lg-8">
                    <div class="product-details-content">
                        <div class="product-details-header">
                            <h2 class="title">The Breeze Zodiac IX</h2>
                            <ul>
                                <li>Listing ID: 14076242</li>
                                <li>Item #: 7300-3356862</li>
                            </ul>
                        </div>
                        <ul class="price-table mb-30">
                            <li class="header">
                                <h5 class="current">Current Price</h5>
                                <h3 class="price">US $700.00</h3>
                            </li>
                            <li>
                                <span class="details">Buyer's Premium</span>
                                <h5 class="info">10.00%</h5>
                            </li>
                            <li>
                                <span class="details">Bid Increment (US)</span>
                                <h5 class="info">$50.00</h5>
                            </li>
                        </ul>
                        <div class="product-bid-area">
                            <form class="product-bid-form">
                                <div class="search-icon">
                                    <img src={search} alt="product"/>
                                </div>
                                <input type="text" placeholder="Enter you bid amount"/>
                                <button type="submit" class="custom-button">Submit a bid</button>
                            </form>
                        </div>
                        <div class="buy-now-area">
                            <a href="#0" class="custom-button">Buy Now: $4,200</a>
                           {/* <!--  <a href="#0" class="rating custom-button active border"><i class="fas fa-star"></i> Add to Wishlist</a> --> */}
                            <div class="share-area">
                                <span>Share to:</span>
                                <ul>
                                    <li>
                                        <a href="#0"><GrFacebookOption/></a>
                                    </li>
                                    <li>
                                        <a href="#0"><AiOutlineTwitter/></a>
                                    </li>
                                    <li>
                                        <a href="#0"><RiLinkedinFill/></a>
                                    </li>
                                    <li>
                                        <a href="#0"><AiOutlineInstagram/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="product-sidebar-area">
                        <div class="product-single-sidebar mb-3">
                            <h6 class="title">This Auction Ends in:</h6>
                            <div class="countdown">
                                <div id="bid_counter1"></div>
                            </div>
                            <div class="side-counter-area">
                                <div class="side-counter-item">
                                    <div class="thumb">
                                      <FiAward/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span class="counter">61</span></h3>
                                        <p>Active Bidders</p>
                                    </div>
                                </div>
                                <div class="side-counter-item">
                                    <div class="thumb">
                                       <FiEye/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span class="counter">203</span></h3>
                                        <p>Watching</p>
                                    </div>
                                </div>
                                <div class="side-counter-item">
                                    <div class="thumb">
                                       <BsGift/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span class="counter">82</span></h3>
                                        <p>Total Bids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#0" class="cart-link">View Shipping, Payment & Auction Policies</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-menu-area mb-40-60 mt-70-100">
            <div class="container">
                <ul class="product-tab-menu nav nav-tabs">
                    <li>
                        <a href="#details" class="active" data-toggle="tab">
                            <div class="thumb">
                                <img src={tab1} alt="product"/>
                            </div>
                            <div class="content">Description</div>
                        </a>
                    </li>
                    <li>
                        <a href="#delevery" data-toggle="tab">
                            <div class="thumb">
                                <img src={tab2} alt="product"/>
                            </div>
                            <div class="content">Delivery Options</div>
                        </a>
                    </li>
                    <li>
                        <a href="#history" data-toggle="tab">
                            <div class="thumb">
                                <img src={tab3} alt="product"/>
                            </div>
                            <div class="content">Bid History (36)</div>
                        </a>
                    </li>
                    <li>
                        <a href="#questions" data-toggle="tab">
                            <div class="thumb">
                                <img src={tab4} alt="product"/>
                            </div>
                            <div class="content">Questions </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="details">
                    <div class="tab-details-content">
                        <div class="header-area">
                            <h3 class="title">2012 Ford Escape Hybrid (Brooklyn, NY 11214)</h3>
                            <div class="item">
                                <table class="product-info-table">
                                    <tbody>
                                        <tr>
                                            <th>Condition</th>
                                            <td>New</td>
                                        </tr>
                                        <tr>
                                            <th>Mileage</th>
                                            <td>15,000 miles</td>
                                        </tr>
                                        <tr>
                                            <th>Year</th>
                                            <td>09-2017</td>
                                        </tr>
                                        <tr>
                                            <th>Engine</th>
                                            <td>I-4 1,5 l</td>
                                        </tr>
                                        <tr>
                                            <th>Fuel</th>
                                            <td>Regular</td>
                                        </tr>
                                        <tr>
                                            <th>Transmission</th>
                                            <td>Automatic</td>
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <td>Blue</td>
                                        </tr>
                                        <tr>
                                            <th>Doors</th>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">NYC Fleet / DCAS units may be located at either of two locations:</h5>
                                <ul>
                                    <li>Brooklyn, NY (1908 Shore Parkway)</li>
                                    <li>Medford, NY (66 Peconic Ave)</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">This unit is located at:</h5>
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Acceptance of condition - buyer inspection/preview</h5>
                                <p>Vehicles and equipment often display significant wear and tear. Assets are sold AS IS with no warranty, express or implied, and we highly recommend previewing them before bidding. The preview period is the only opportunity to inspect an asset to verify condition and suitability. No refunds, adjustments or returns will be entertained. </p>
                                <p>Vehicle preview inspections of the vehicle can be done at the below location on Monday and Tuesday from 10am - 2pm. See Preview Rules Here.</p>                                
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="delevery">
                    <div class="shipping-wrapper">
                        <div class="item">
                            <h5 class="title">shipping</h5>
                            <div class="table-wrapper">
                                <table class="shipping-table">
                                    <thead>
                                        <tr>
                                            <th>Available delivery methods </th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Customer Pick-up (within 10 days)</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Shipping (5-7 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                        <tr>
                                            <td>Expedited Shipping (2-4 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">Notes</h5>
                            <p>Please carefully review our shipping and returns policy before committing to a bid.
                            From time to time, and at its sole discretion, Sbidu may change the prevailing fee structure for shipping and handling.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="history">
                    <div class="history-wrapper">
                        <div class="item">
                            <h5 class="title">Bid History</h5>
                            <div class="history-table-area">
                                <table class="history-table">
                                    <thead>
                                        <tr>
                                            <th>Bidder</th>
                                            <th>date</th>
                                            <th>time</th>
                                            <th>unit price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={history1} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        Moses Watts
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">06/16/2021</td>
                                            <td data-history="time">02:45:25 PM</td>
                                            <td data-history="unit price">$900.00</td>
                                        </tr>
                                        <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={history2} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        Pat Powell
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">06/16/2021</td>
                                            <td data-history="time">02:45:25 PM</td>
                                            <td data-history="unit price">$900.00</td>
                                        </tr>
                                        <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={history3} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        Jack Rodgers
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">06/16/2021</td>
                                            <td data-history="time">02:45:25 PM</td>
                                            <td data-history="unit price">$900.00</td>
                                        </tr>
                                        <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={history4} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        Arlene Paul
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">06/16/2021</td>
                                            <td data-history="time">02:45:25 PM</td>
                                            <td data-history="unit price">$900.00</td>
                                        </tr>
                                        <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={history5} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        Marcia Clarke
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">06/16/2021</td>
                                            <td data-history="time">02:45:25 PM</td>
                                            <td data-history="unit price">$900.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="text-center mb-3 mt-4">
                                    <a href="#0" class="button-3">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="questions">
                        <h5 class="faq-head-title">Frequently Asked Questions</h5>
                        <div class="faq-wrapper">
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">How to start bidding?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">Security Deposit / Bidding Power </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">Delivery time to the destination port </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">How to register to bid in an auction?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item open active">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">How will I know if my bid was successful?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src={faq} alt="css"/><span class="title">What happens if I bid on the wrong lot?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

     {/* <!--============= Product Details Section Ends Here =============--> */}

   </>
  )
}
