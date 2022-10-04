import React from "react";

import "../static/scss/cart/card.scss";

const Cart = () => {
  return (
    <div>
      <div className="card">
        <div className="header">
          <p className="p"> Cart</p>
        </div>
        <div className="body">
          <p>Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
