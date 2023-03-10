import React from 'react'
import car from "../../assets/images/auction/car/auction-1.jpg";
import realstate from "../../assets/images/auction/realstate/auction-1.png";
import popular from "../../assets/images/auction/popular/auction-2.jpg";
import { FiClock } from "react-icons/fi";
export default function CardImages() {
  return (
    
      <div class="row justify-content-center mb-30-none">
      <div class="col-sm-10 col-md-6 col-lg-4">
          <div class="auction-item-2">
              <div class="auction-thumb">
                  <a href="product-details.html"><img src={car} alt="car"/></a>
                 <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
              </div>
              <div class="auction-content">
                  <div class="countdown-area-new">
                      <i class="feather-clock"><FiClock/></i>
                      <div id="bid_counter29"></div>
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

      <div class="col-sm-10 col-md-6 col-lg-4">
          <div class="auction-item-2">
              <div class="auction-thumb">
                  <a href="product-details.html"><img src={realstate} alt="car"/></a>
                 
                  <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
              </div>
              <div class="auction-content">
                  <div class="countdown-area-new">
                      <i class="feather-clock"><FiClock/></i>
                      <div id="bid_counter30"></div>
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

      
      <div class="col-sm-10 col-md-6 col-lg-4">
          <div class="auction-item-2">
              <div class="auction-thumb">
                  <a href="product-details.html"><img src={popular} alt="car"/></a>
                 
                  <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
              </div>
              <div class="auction-content">
              <div class="countdown-area-new">
                      <i class="feather-clock">  <FiClock/></i>
                    
                      <div id="bid_counter31"></div>
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
  )
}
