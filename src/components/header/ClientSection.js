import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import photo1 from "../../assets/images/client/client01.png";
import photo2 from "../../assets/images/client/client02.png";
import photo3 from "../../assets/images/client/client03.png";
import { BsStarFill } from "react-icons/bs";

export default function ClientSection() {
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
          <OwlCarousel items={3} margin={0} className="owl-theme client-slider  owl-carousel" loop nav>
            <div className="client-item">
              <div className="client-content">
                <p>
                  I can't stop bidding! It's a great way to spend some time and
                  I want everything on Sbidu.
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
                    <a href="#0">Alexis Moore</a>
                  </h6>
                  <div className="ratings">
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>

                    {/* <span><i className="fas fa-star"></i></span>
                                  <span><i className="fas fa-star"></i></span>
                                  <span><i className="fas fa-star"></i></span>
                                  <span><i className="fas fa-star"></i></span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="client-item">
              <div className="client-content">
                <p>
                  I came I saw I won. Love what I have won, and will try to win
                  something else.
                </p>
              </div>
              <div className="client-author">
                <div className="thumb">
                  <a href="#0">
                    <img src={photo2} alt="client" />
                  </a>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="#0">Darin Griffin</a>
                  </h6>
                  <div className="ratings">
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="client-item">
              <div className="client-content">
                <p>
                  This was my first time, but it was exciting. I will try it
                  again. Thank you so much.
                </p>
              </div>
              <div className="client-author">
                <div className="thumb">
                  <a href="#0">
                    <img src={photo3} alt="client" />
                  </a>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="#0">Tom Powell</a>
                  </h6>
                  <div className="ratings">
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
