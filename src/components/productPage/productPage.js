import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ImagesAndButtons from "./imagesAndButtons";
import ProductDetails from "./productDetails";
import "./product-page.css"

export const ProductPage = ({ match }) => {
  const productList = useSelector(state => state.productsData);

  const category = match.params.category;
  const brand = match.params.brand;
  const indexValue = match.params.indexValue;
  const productBrandList = productList[category][brand];
  const product = productBrandList[indexValue];

  return (
    <div className="product-page-container">
      <ImagesAndButtons product={product} />
      <ProductDetails product={product} />
    </div>
  );
};
