import React, {Fragment} from 'react';
import { CartItems } from "./cartItems.js";
import './cart.css'

export const Cart = () => {
    return (
    <Fragment>

    <div class="cart-container">
        <div class="cart-items-container">
            <CartItems />
        </div>
        <div class="cart-price-container">
        <div class="price-title upper-title">
          <h2>Price Details</h2>
        </div>
        <div class="details-container lower-title">
          <h3 class="detail-name">Price (1 item)</h3>

          <h3 class="exact-detail">7500</h3>
        </div>
        <div class="details-container lower-title">
          <h3 class="detail-name">saving</h3>

          <h3 class="exact-detail">2000</h3>
        </div>
        <div class="details-container lower-title">
          <h3 class="detail-name">Delivery Charge</h3>

          <h3 class="exact-detail">FREE</h3>
        </div>
        <div class="saving-detail upper-title">
          <p>You have saved Rs. 2500 and got a free delivery too :)</p>
        </div>
      </div>
    </div>
    <div class="checkout-button-container lower-title">
          <h2 class="checkout-price">Price 340</h2>
          <button class="checkout-button">CHECKOUT</button>
    </div>
    </Fragment>
    )
}

