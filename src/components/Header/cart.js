import React from "react";
import { Fragment } from "react";
import {useSelector} from 'react-redux'


export const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);
  return (
    <Fragment>
      <img className="cartBoxStyles" src="/shopping-cart.svg" alt="cart" />
      <div className="cartItemNumber">
        <p>{cartItems.length}</p>
      </div>
    </Fragment>

  );
};
