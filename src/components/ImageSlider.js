import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import { productImages } from "../data/imgs/productImages";
import { GROUP2 } from "../data/imgs/imgs";
import "../static/scss/image-slider.scss";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  //   const [current, setCurrent] = React.useState(0);
  const slideRef = React.createRef();
  const back = () => {
    slideRef.current.goBack();
  };
  const next = () => {
    slideRef.current.goNext();
  };
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>,
  };
  return (
    <div className="App">
      <h3>Slide Effect</h3>
      <div className="slide-container">
        <Slide ref={slideRef} {...properties}>
          {GROUP2.map((each, index) => (
            <div key={index} className="each-slide">
              <div>
                <img className="lazy" src={each} alt="sample" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="slide-container buttons">
        <button onClick={back} type="button">
          Go Back
        </button>
        <button onClick={next} type="button">
          Go Next
        </button>
      </div>
    </div>
  );
};
export default ImageSlider;
