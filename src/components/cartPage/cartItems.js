import React, { Fragment } from "react";
import {useSelector, useDispatch} from 'react-redux'

export const CartItems = () => {
  let cartContent = <h1>no </h1>
  const cartItems = useSelector(state => state.cartItems)
  let cartCreator = p => {
    return (
      <div class="cart-item-container">
        <div class="cart-item">
          <div class="item-piece-details">
            <div class="item-piece">
              <img
                src={p.images[0]}
                alt=""
              />
              <div class="quantity-selector">
                <button class="quantity-btns">-</button>
                <input class="quantity-input" type="text" value="1" />
                <button class="quantity-btns">-</button>
              </div>
              <button class="remove-btn">Remove Item</button>
            </div>
            <h6>{p.title}</h6>
            <div class="item-details">
              <p>white color strap</p>
              <p>size : 4</p>
              <p>Price block</p>
            </div>
          </div>

          <div class="delivery-address-details">
            <h3>your selected Adrees is : </h3>
            <br />
            <p>Addrss goes </p>
            <p>here</p>
            <br />

            <button>Change Address</button>
          </div>
        </div>
      </div>
    );
  }
  
  if (cartItems.length>0){
    cartContent = cartItems.map(p => cartCreator(p))
  }
  return (
    <Fragment>
      <div class="cart-item-num upper-title">
        <h2>Cart Items {cartItems.length}</h2>
      </div>
      {cartContent}
    </Fragment>
  );
};

