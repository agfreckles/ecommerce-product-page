import React from "react";
import "../static/scss/styles.scss";
import "../static/scss/container.scss";
import Header from "./Header";
import ProductPage from "./ProductPage";

const App = () => {
  const [cart, setCart] = React.useState([]);
  return (
    <div value={null} className="container">
      <Header cart={cart} setCart={setCart} />
      <ProductPage cart={cart} setCart={setCart} />
      <div id="ex3">
        <span class="p1 fa-stack fa-5x has-badge" data-count="3">
        </span>
      </div>
    </div>
  );
};

export default App;
