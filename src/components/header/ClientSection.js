import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import photo1 from "../../assets/images/client/client01.png";
import photo2 from "../../assets/images/client/client02.png";
import photo3 from "../../assets/images/client/client03.png";
import { BsStarFill } from "react-icons/bs";
import axios from "axios";


export default function ClientSection() {
  const [ratingdataApiCall, setratingdataApiCall] = useState([]);

  useEffect(() => {
    axios
      .post(`http://192.168.29.28:5000/listrating`)
      .then((response) => {
        setratingdataApiCall(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, ["http://localhost:3000/"]);

  return (
    <section className="client-section padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Don’t just take our word for it!</h2>
          <p>
            Our hard work is paying off. Great reviews from amazing customers.
          </p>
        </div>
        <div className="m--15">
          {/* <div className="client-slider owl-theme owl-carousel"> */}
          <OwlCarousel  items={3} margin={0} className="owl-theme client-slider  owl-carousel" loop nav>
            {ratingdataApiCall.map((data) => {
             // console.log(data)
              return (
                <>
               
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        {data.rating_message}
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <a href="#0">
                          <img src={photo1} alt="client" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#0">{data.rating_by}</a>
                        </h6>
                        <div className="ratings">
                          <span>
                          <i className="fas fa-star"> <BsStarFill /></i>
                          </span>
                          <span>
                          <i className="fas fa-star"> <BsStarFill /></i>
                          </span>
                          <span>
                          <i className="fas fa-star"> <BsStarFill /></i>
                          </span>
                          <span>
                          <i className="fas fa-star"> <BsStarFill /></i>
                          </span>
                          <span>
                          <i className="fas fa-star"> <BsStarFill /></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
