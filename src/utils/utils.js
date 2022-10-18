export const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>,
  };