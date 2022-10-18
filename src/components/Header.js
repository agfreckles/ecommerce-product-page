import React from "react";
import Popup from "reactjs-popup";
import "../static/scss/styles.scss";
import "../static/scss/header.scss";
import Cart from "./Cart";

const Header = (props) => {
  return (
    <div className="header">
      <a className="sneaker">sneakers</a>
      <a className="hide">Collections</a>
      <a className="hide">Men</a>
      <a className="hide">Women</a>
      <a className="hide">About</a>
      <a className="hide">Contact</a>
      <span className="right">
      {/* <a id="badge-holder"> */}
      {/* <section className="right"> */} 
      <span id="notifier">
        <a className="cart-notify">
          <Popup
            trigger={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="50"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            }
            modal
          >
            <span>
              {" "}
              <Cart cart={props.cart} setCart={props.setCart} />
            </span>
          </Popup>
          <span
            className={`${
              props.cart?.length ? "fa-stack fa-5x has-badge" : ""
            }`}
            data-count={props.cart?.length}
          ></span>
        </a>
      </span>
      {/* </a> */}
      <a  className="user_profile_container">
        <img src={window.location.origin + `/imgs/image-avatar.png`} />
      </a>
      {/* </section> */}
      </span>
    </div>
  );
};

export default Header;
