import React, { useState, useEffect } from "react";
import car from "../../assets/images/auction/car/auction-1.jpg";
// import realstate from "../../assets/images/auction/realstate/auction-1.png";
// import popular from "../../assets/images/auction/popular/auction-2.jpg";
import { FiClock } from "react-icons/fi";
import axios from "axios";

//import CardImages from './CardImages';

export default function Upcoming() {

  const [upcomingData, setupcomingData] = useState([]);
  useEffect(() => {
    axios
      .post(`http://192.168.29.28:5000/upcomingauctionlist`)
      .then((response) => {
        setupcomingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section class="upcoming-auction-section padding-bottom pt-md-half  pos-rel">
      <div class="container">
        <div class="section-header-3">
          <div class="left">
            <div class="title-area">
              <h2 class="title">Upcoming Auctions</h2>
              <p>New auctions where you can bid now and save money</p>
            </div>
          </div>
          <a href="#0" class="normal-button">
            View All
          </a>
        </div>

        <div class="row justify-content-center mb-30-none">
          {upcomingData.map((data) => {
            //console.log(element)
            return (
              <>
                <div class="col-sm-10 col-md-6 col-lg-4">
                  <div class="auction-item-2">
                    <div class="auction-thumb">
                      <a href="product-details.html">
                        <img src={car} alt="car" />
                      </a>
                      <a href="#0" class="bid">
                        <i class="flaticon-auction"></i>
                      </a>
                    </div>
                    <div class="auction-content">
                      <div class="countdown-area-new">
                        <FiClock />
                        <div id="bid_counter29">{data.bid_start_time}</div>
                        <span class="amount">${data.startingBid}</span>
                      </div>
                      <h6 class="title">
                        <a href="product-details.html">
                          {data.name}
                        </a>
                      </h6>
                      <p>
                        {data.discription}
                        </p>
                      <div class="text-center">
                        <a href="#0" class="custom-button">
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

        {/* <CardImages/> */}
      </div>
    </section>
  );
}
