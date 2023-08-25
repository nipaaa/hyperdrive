import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BrandSlider = () => {
  var settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="brand_slider mb-3">
      <Slider {...settings}>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-2">.</p> SOLANA HACKATHON
        </div>
      </Slider>
    </div>
  );
};

export default BrandSlider;
