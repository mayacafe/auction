import React, { useState, useEffect } from "react";
import photo1 from "../../assets/images/auction/real-estate.png";
// import photo2 from "../../assets/images/auction/car.png";
// import photo3 from "../../assets/images/auction/double-bed.png";
// import photo4 from "../../assets/images/auction/responsive.png";
// import photo5 from "../../assets/images/auction/washer.png";
// import photo6 from "../../assets/images/auction/ceiling-lamp.png";
import axios from "axios";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function SectionBrowse() {
  const [catergoryData, setcatergoryData] = useState([]);
  useEffect(() => {
    axios
      .post(`http://192.168.29.28:5000/listcatergory`)
      .then((response) => {
        setcatergoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };

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
                <i className="flaticon-left-arrow">
                  <HiOutlineArrowNarrowLeft />
                </i>
              </a>
              <a href="#0" className="bro-next active">
                <i className="flaticon-right-arrow">
                  <HiOutlineArrowNarrowRight />
                </i>
              </a>
            </div>
          </div>
          <div className="m--15">
            <OwlCarousel
              items={6}
              className=" browse-slider owl-carousel owl-theme "
              loop
              nav
              autoplay={true}
              dots={false}
              touchDrag={true}
              lazyLoad={true}
              responsive={state.responsive} // add this line
              animateOut={"fadeOut"}
              animateIn={"flipInX"}
              margin={1}
            >
              {catergoryData.map((element) => {
             // console.log(element)
                return (
                  <>
                    <a href="#0" className="browse-item">
                      <img src={photo1} alt="auction" />
                      <span className="info">{element.name}</span>
                    </a>
                  </>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!--============= Hightlight Slider Section Ends Here =============--> */}
    </div>
  );
}
