import React from 'react';

const ProductDetails = ({product}) => {
    return (
      <div class="product-detail-container">
        <div class="product-title">
          <h1>{product.title}</h1>
        </div>

        <div class="price-container">
          <h3 class="main-price">{product.sellingPrice}</h3>
          <h5 class="false-price">{product.scratchedPrice}</h5>
          <h5 class="discount">{product.specialDiscount}</h5>
        </div>
        <div class="rating-review-container">
          <div class="ratingbox">
            <p class="rating rate">{product.rating}</p>
            <span class="star rate">
              <p>★</p>
            </span>
          </div>
          <div class="reviews">
            <p>{product.reviews}</p>
          </div>
        </div>
        <div class="product-specs-container">
          <ul>
            <li>
              <div class="description-container">
                <div class="description-title">
                  <h4>Description</h4>
                </div>
                <div class="product-description">
                  <p>{product.description}</p>
                </div>
              </div>
              <br />
              <div class="description-container">
                <div class="description-title">
                  <h4>HighLights</h4>
                </div>
                <div class="product-description">
                  
                    {product.highlightsList.map(x => (
                      <li>{x}</li>
                    ))}
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default ProductDetails;
