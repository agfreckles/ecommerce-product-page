import React from "react";
import "../static/scss/product-page.scss";

const ProductPage = () => {
  return (
    <div className="main">


      
      <div className="prodImg">
        <div className="main-img-holder">
          <img src={require("../static/imgs/image-product-1.jpg")} />
        </div>
        <div className="thumbnails-holder">
          <div className="thumbnails">
            <img
              src={require("../static/imgs/image-product-1-thumbnail.jpg")}
            />
          </div>
          <div className="thumbnails">
            <img
              src={require("../static/imgs/image-product-2-thumbnail.jpg")}
            />
          </div>
          <div className="thumbnails">
            <img
              src={require("../static/imgs/image-product-3-thumbnail.jpg")}
            />
          </div>
          <div className="thumbnails">
            <img
              src={require("../static/imgs/image-product-4-thumbnail.jpg")}
            />
          </div>
        </div>
      </div>
      <div className="prodInfo">
        <div className="sneaker-company"> SNEAKER COMPANY</div>
        <div className="fall"> Fall Limited Edition Sneakers </div>
        <div className="paragraph">
          {" "}
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className="price">
          $125.00
          <span className="discount"> 50% </span>
        </div>
        <div className="reduction">$250.00</div>
        <div className="add-to-cart">
          <button className="plus-minus">
            <span className="minus">-</span>
            <span>0</span>
            <span className="plus">+</span>
          </button>
          <button className="add">
            <span>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffff"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
