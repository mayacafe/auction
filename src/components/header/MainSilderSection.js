import React from "react";
import photo1 from "../../assets/images/banner/banner-bg-1.png";
import photo2 from "../../assets/images/banner/banner-bg-2.png";
import photo3 from "../../assets/images/banner/banner-bg-3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function MainSilderSection() {
  return (
    <section className=" main-slider-section">
      <OwlCarousel items={1} margin={0} autoplay={true}>
        <div className="slide-item">
          <img src={photo1} alt="client" />
          <div className="slide-content">
            <h5 className="cate">Next Generation Auction</h5>
            <h1 className="title">
              Find your dream <br /> car
            </h1>
            <p>
              Online Auction is where everyone goes to shop, sell,and <br />{" "}
              give, while discovering variety and affordability.
            </p>
            <a href="#0" className="custom-button yellow btn-large">
              Get Started
            </a>
          </div>
        </div>
        <div className="slide-item">
          <img src={photo2} alt="client" />
          <div className="slide-content">
            <h5 className="cate">Next Generation Auction</h5>
            <h1 className="title">
              Find Your Next <br /> Deal!
            </h1>
            <p>
              Online Auction is where everyone goes to shop, sell,and <br />{" "}
              give, while discovering variety and affordability.
            </p>
            <a href="#0" className="custom-button yellow btn-large">
              Get Started
            </a>
          </div>
        </div>
        <div className="slide-item">
          <img src={photo3} alt="client" />
          <div className="slide-content">
            <h5 className="cate">Welcome To Auction House</h5>
            <h1 className="title">
              Build, sell & <br /> collect
            </h1>
            <p>
              Online Auction is where everyone goes to shop, sell,and <br />
              give, while discovering variety and affordability.
            </p>
            <a href="#0" className="custom-button yellow btn-large">
              Get Started
            </a>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
}
