import React, {useState, useEffect} from "react";
import photo1 from "../../assets/images/auction/real-estate.png";
import photo2 from "../../assets/images/auction/car.png";
import photo3 from "../../assets/images/auction/double-bed.png";
import photo4 from "../../assets/images/auction/responsive.png";
import photo5 from "../../assets/images/auction/washer.png";
import photo6 from "../../assets/images/auction/ceiling-lamp.png";
import axios from "axios";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";       


export default function SectionBrowse() {
  const [catergoryData, setcatergoryData] = useState([])
  
 useEffect(()=>{
    axios.post(`http://192.168.29.28:5000/listcatergory`)
    .then((response) => {
      setcatergoryData(response.data);
    })
    .catch(error =>{
          console.log(error)
        })
  },[])

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
                {/* <i className="flaticon-left-arrow"></i> */}
                <HiOutlineArrowNarrowLeft />
              </a>
              <a href="#0" className="bro-next active">
                {/* <i className="flaticon-right-arrow"></i> */}
                <HiOutlineArrowNarrowRight />
              </a>
            </div>
          </div>
          <div className="m--15">
            <OwlCarousel items={6} className=" browse-slider owl-carousel owl-theme" loop nav margin={0}>
            {catergoryData.map((element) => {
             return(
              <>
             
              <a href="#0" className="browse-item">
              <img src={photo1} alt="auction" />
              <span className="info">{element.name}</span>
            </a>
            </>
             )
            })}
              {/* <a href="#0" className="browse-item">
                <img src={photo1} alt="auction" />
                <span className="info">Properties</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo2} alt="auction" />
                <span className="info">Vehicles</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo3} alt="auction" />
                <span className="info">Furniture</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo4} alt="auction" />
                <span className="info">Electronics</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo5} alt="auction" />
                <span className="info">Appliances</span>
              </a>

              <a href="#0" className="browse-item">
                <img src={photo6} alt="auction" />
                <span className="info">Electrical</span>
              </a> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!--============= Hightlight Slider Section Ends Here =============--> */}
    </div>
  );
}
