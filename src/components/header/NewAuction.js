import React from "react";
import photo1 from "../../assets/images/auction/electronics/auction-1.jpg";
import photo2 from "../../assets/images/auction/electronics/auction-2.jpg";
import photo3 from "../../assets/images/auction/electronics/auction-3.jpg";
import photo4 from "../../assets/images/auction/electronics/auction-4.jpg";
import art1 from "../../assets/images/auction/art/auction-1.jpg";
import art2 from "../../assets/images/auction/art/auction-2.jpg";
import art3 from "../../assets/images/auction/art/auction-3.jpg";
import art4 from "../../assets/images/auction/art/auction-4.jpg";
import OwlCarousel from "react-owl-carousel";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function NewAuction() {
  return (
    <section className="art-and-electronics-auction-section padding-top">
      <div className="container">
        <div className="row justify-content-center mb--50">
          <div className="col-xl-6 col-lg-8 mb-50">
            <div className="section-header-2">
              <div className="left">
                <h2 className="title">New Auction</h2>
              </div>
              <div className="slider-nav">
                <a href="#0" className="electro-prev">
                  <i className="flaticon-left-arrow"><HiOutlineArrowNarrowLeft/></i>
                </a>
                <a href="#0" className="electro-next active">
                  <i className="flaticon-right-arrow"><HiOutlineArrowNarrowRight/></i>
                </a>
              </div>
            </div>
            {/* <div className="auction-slider-1 owl-carousel owl-theme  mb-30-none"> */}
            <OwlCarousel items={1} margin={8} autoplay={true}>
              <div className="slide-item">
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo1}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Magnifying Glasses, Jewelry Loupe odit qui corporis
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter1"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo2}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Surveillance WiFi Exterieur, 1080P Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter2"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo3}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        WiFi Doorbell Camera for Apartments
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter3"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo4}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        GPD Pocket 2 Ultrabook 7" inch
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter4"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo1}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Magnifying Glasses, Jewelry Loupe odit qui corporis
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter5"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo2}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Surveillance WiFi Exterieur, 1080P Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter6"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo3}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        WiFi Doorbell Camera for Apartments
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter7"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={photo4}
                        alt="electronics"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        GPD Pocket 2 Ultrabook 7" inch
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter8"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            {/* </div> */}
          </div>
          <div className="col-xl-6 col-lg-8 mb-50">
            <div className="section-header-2">
              <div className="left">
                <h2 className="title">Latest Bid</h2>
              </div>
              <div className="slider-nav">
                <a href="#0" className="art-next active">
                  <i className="flaticon-right-arrow"><HiOutlineArrowNarrowRight/></i>
                </a>
              </div>
            </div>
            {/* <div className="auction-slider-2 owl-carousel owl-theme mb-30-none"> */}
            <OwlCarousel items={1} margin={8} autoplay={true}>
              <div className="slide-item">
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art1 }
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Magnifying Glasses, Jewelry Loupe odit qui corporis
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter9"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art2}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Surveillance WiFi Exterieur, 1080P Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter10"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art3}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        WiFi Doorbell Camera for Apartments
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter11"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art4}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        GPD Pocket 2 Ultrabook 7" inch
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter12"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art1}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Magnifying Glasses, Jewelry Loupe odit qui corporis
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter13"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art2}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Surveillance WiFi Exterieur, 1080P Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter14"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art3}
                        alt="art"
                      />
                    </a>

                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        WiFi Doorbell Camera for Apartments
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter15"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
                <div className="auction-item-1">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src={art4}
                        alt="art"
                      />
                    </a>
                    {/* <!--  <a href="#0" className="rating"><i className="far fa-star"></i></a> --> */}
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        GPD Pocket 2 Ultrabook 7" inch
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter16"></div>
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
