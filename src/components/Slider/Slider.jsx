import React, { useState } from "react";
import "./Slider.scss";
import NavButton from "../UI/NavButton/NavButton";

const Slider = ({ imgUrls: imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImg = () => {
    setImageIndex((index) => {
      if (index + 1 === imageUrls.length) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const showPrevImg = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      } else {
        return index - 1;
      }
    });
  };
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__container__line">
          {imageUrls.map((url) => (
            <img
              src={url}
              key={url}
              alt=""
              className="slider-img"
              style={{ transform: `translate(-${imageIndex * 100}%, 0)` }}
            />
          ))}
        </div>
      </div>
      <div className="slider__navigation">
        <NavButton
          onClick={showPrevImg}
          isNext={false}
          style={{ position: "relative", left: "20px" }}
        ></NavButton>
        <NavButton
          onClick={showNextImg}
          isNext={true}
          style={{ position: "relative", left: "-20px" }}
        ></NavButton>
      </div>
    </div>
  );
};

export default Slider;
