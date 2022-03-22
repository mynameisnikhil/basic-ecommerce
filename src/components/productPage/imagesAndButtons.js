import React from "react";

const ImagesAndButtons = ({ product }) => {
  console.log(product);
  
  return (
    <div class="product-img-btn">
      <div class="product-img-container">
        <div class="images-list">
          <ul>
            {product.images.map((s, index) => {
              return (
                <li class="side-img">
                  <img src={s} alt={index} />
                </li>
              );
            })}
          </ul>
        </div>
        <div class="main-image">
          <img
            src={product.images[0]}
            alt='Main-Image'
          />
        </div>
      </div>
      <div class="action-buttons">
        <div class="buy-now-btn">
          <button class="a-btn">BUY NOW</button>
        </div>
        <div class="add-cart-btn">
          <button class="a-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ImagesAndButtons;
