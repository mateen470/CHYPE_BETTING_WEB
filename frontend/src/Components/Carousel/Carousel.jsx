import React from "react";
import "./slider.css";
import Slider from "react-slick";
import cr7 from "./assets/Cr7.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  const ok = [{ image: cr7 }, { image: cr7 }, { image: cr7 }, { image: cr7 }];
  return (
    <div className="Carousel_rootDiv">
      <Slider {...settings}>
        {ok.map((arr, index) => (
          <div className="carousel_root_child" key={index}>
            <div className="carousel_main_Div">
              <div className="carousel_textPortion_root_div">
                <h1>No Social Media? NoFun!</h1>
                <div className="paragrpahs_of_textPortion">
                  <p>Follow for latest upadtes,</p>
                  <p>give aways and all exciting content NOW!</p>
                </div>
                <div className="button_textPortion">
                  <button>Show More</button>
                </div>
              </div>
              <div className="img_carousel">
                <img src={arr.image} alt="IMAGE" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
