import React from "react";
import "../static/scss/slider.scss";
const Slider = ({ slides, close, toggleClose }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const Close = () => {
    close = "none";
    toggleClose(close);
  };
  const goToPrev = () => {
    const isFirstSlide = activeIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = activeIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };
  const slideContainerStyles = {
    height: "100vh",
    width: "100vw",
    position: "relative",
    border: "1px solid gray",
    backdropFilter: "brightness(25%)",
  };
  const slideStyles = {
    height: "50%",
    width: "40%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[activeIndex].url}`,
    margin: "22em auto",
  };
  return (
    <div style={slideContainerStyles}>
      <div className="arrow" id="close" onClick={() => Close()}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <div className="arrow" id="arrow-left" onClick={() => goToPrev()}>
        <span className="material-symbols-outlined">navigate_before</span>
      </div>
      <div style={slideStyles}></div>
      <div className="arrow" id="arrow-forward" onClick={() => goToNext()}>
        <span className="material-symbols-outlined">navigate_next</span>
      </div>
    </div>
  );
};
export default Slider;
