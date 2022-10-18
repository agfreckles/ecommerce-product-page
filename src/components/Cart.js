import React from "react";
import { products } from "../data/product";

import "../static/scss/cart/card.scss";

const Cart = (props) => {
  const cartTotal = props.cart?.length ? props.cart.length * 125.0 : 0;

  const nom = Math.ceil(Math.random() * 4);
  const amountOfItems = (id) =>
    props.cart.filter((item) => item.id === id).length;
  const listItemsInCart = () => {
    return props.cart?.length ? (
      products.map((item) => (
        <div key={item.id} className="item-in-cart">
          <img
            src={
              window.location.origin +
              `/imgs/image-product-${nom}-thumbnail.jpg`
            }
            alt="thumbnail"
          />
          <span>
            {`${item.name}`} {item.price} x {amountOfItems(item.id)}{" "}
            <span id="total">${cartTotal}.00</span>
          </span>
          <div className="delete" onClick={() => props.setCart([])}>
            <span className="material-symbols-outlined">delete</span>
          </div>
          {/* <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onClick={() => props.setCart([])}
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
          </svg> */}
        </div>
      ))
    ) : (
      <p>Your cart is empty. </p>
    );
  };
  return (
    <div>
      <div className="card">
        <div className="header">
          <p className="p"> Cart</p>
        </div>
        <div className="body">
          <div className="item-in-cart-container">{listItemsInCart()}</div>
        </div>
        {props.cart?.length ? (
          <button className="checkout">Checkout</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
