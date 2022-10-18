import React from "react";
import "../static/scss/styles.scss";
import "../static/scss/container.scss";
import Header from "./Header";
import ProductPage from "./ProductPage";
import { productImages } from "../data/imgs/productImages";
import Slider from "./Slider";

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [close, toggleClose] = React.useState("none");
  const containerStyles = {
    position: "absolute",
    // top: 0,
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    display: `${close}`,
    margin: "0 auto",
    overflow: "hidden",
    objectFit: "fill",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div style={containerStyles}>
        <Slider
          slides={productImages}
          close={close}
          toggleClose={toggleClose}
        />
      </div>

      <div value={null} className="container">
        <Header cart={cart} setCart={setCart} />
        <ProductPage
          cart={cart}
          setCart={setCart}
          close={close}
          toggleClose={toggleClose}
        />
      </div>
    </div>
  );
};

export default App;
