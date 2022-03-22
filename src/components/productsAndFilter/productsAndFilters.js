import React from "react";
import { useSelector } from "react-redux";
import {ProductCard} from './productCard'
import {FiltersComponent} from './Filterbox/filtersComponent'

export function BodyContainer({match}) {
  
  
  const sortOption = useSelector(state => state.sortOption);
  const products = useSelector(state => state.ecomdata);
  const checkedElements = useSelector(state => state.checkedCategory);
  const category = match.params.category

  
  // products.sort((a, b) => a.price - b.price);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <FiltersComponent category={category} />
      <ProductCard category={category} />
    </div>
  );
}
