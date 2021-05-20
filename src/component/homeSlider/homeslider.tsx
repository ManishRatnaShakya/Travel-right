import React from "react";

const homeSlider = () => {
  return (
    <div className="slider-block column-1 px-5">
      <div className="home-v12-slider">
        <div className="home-v12-slider home-slider">
          <div
            className="slider-1"
            style={{
              backgroundImage:
                "url(https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676)",
            }}
          >
            <div className="caption">
              <div className="pre-title" style={{color: "white" ,fontFamily:"Mulish"}}>warehouse</div>
              <div className="title"  style={{color: "white" ,fontFamily:"Mulish"}}>clear-out</div>
              <div className="sub-title"  style={{color: "white" ,fontFamily:"Mulish"}}>of fitness home equipment</div>
              <div className="offer-price">up to 70% sale!</div>
              <div className="button">
                Get Yours now
                <i className="tm tm-long-arrow-right"></i>
              </div>
              <div className="bottom-caption"  style={{color: "white" ,fontFamily:"Mulish"}}>Free Shipping All Over Nepal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeSlider;
