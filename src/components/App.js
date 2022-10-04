import React from "react";
import "../static/scss/styles.scss";
import "../static/scss/container.scss";
import Header from "./Header";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import ModalF from "./modal";

const App = () => {
  return (
    <div className="container">
      <Header />

      <ProductPage/>
      {/* <Cart/> */}
    </div>
  );
};

export default App;
