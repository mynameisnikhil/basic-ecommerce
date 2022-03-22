import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartHandler } from "../../actions/index";
import { Link } from "react-router-dom";

export function ProductCard({ category }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  //Price Range Slider Value Array [min, max]
  const sliderValue = useSelector(state => state.priceRange);
  // Select All Products Data from State
  let data = useSelector(state => state.productsData);

  // selecting data according to url category

  category = category[0].toUpperCase() + category.slice(1);
  let BrandWiseData = data[category];

  // sorting data according to selected filters

  //// Selecting checked filters from state
  let checkedCategory = useSelector(state => state.checkedCategory);

  // list of all checked categories
  let checkedCategoryKeys = Object.keys(checkedCategory).slice(1);

  // Making list of all the available data for filteration, Right now data is in brands lists
  let brandsList = Object.keys(BrandWiseData);
  let allData = [];
  brandsList.forEach(x => {
    allData = [...allData, ...BrandWiseData[x]];
  });
  let maindata = [...allData];
  let filterProductList = [...maindata];
  let x = [];
  // filtering out data by applied filters
  for (let char of checkedCategoryKeys) {
    if (checkedCategory[char].length > 0) {
      for (let f of checkedCategory[char]) {
        for (let p of filterProductList) {
          if (p.Specification[char] === f) {
            x = [...x, p];
          }
        }
      }
      filterProductList = x;
      x = [];
    }
  }

  // Price Range Filter now :
  filterProductList = filterProductList.filter(p => {
    let price = p.sellingPrice.match(/\d/g).join("");
    price = parseInt(price, 10);
    return price >= sliderValue[0] && price <= sliderValue[1];
  });

  // //function for manipulating data according to selected filters
  // const applyfilters = (filterCategory) =>  {
  //   // taking all the filters applied from the filter list
  //   let filtersList = checkedCategory[filterCategory];

  //   // Our database structure is brandwise so if brand filter is selected this will give all the products of selected brand in new data list
  //   if (filterCategory === 'Brands'){
  //     if (checkedCategory[filterCategory].length > 0){
  //       allData = []
  //       filtersList.forEach(x => {

  //        allData = [...allData, ...BrandWiseData[x]];
  //       })
  //       maindata = [...allData]
  //     }

  //   }else{
  //     let allFilterData = []
  //     // now all other filters will be checked by iterating on
  //     filtersList.forEach(f => {
  //       // here we will save data from each filter

  //       // We will iterate through all the products in alldata and check for filter match
  //       let filterData = allData.filter(product => {
  //           return product.Specification[filterCategory] === f;
  //       });
  //       allFilterData = [...allFilterData, ...filterData]

  //       // we will update main data

  //     });
  //     allData = allFilterData
  //     maindata = [...allData]
  //   }
  // }

  // checkedCategoryKeys.forEach((element) => {
  //   applyfilters(element)

  // });

  let checkProductInCart = p => {
    if (cartItems.length) {
      for (let char of cartItems) {
        if (char.title === p.title) {
          return `ADDED ${char.Quantity}`;
        }
      }
    }
    return "ADD TO CART";
  };

  const productCardCreator = (d) => {
    let productCards = d.map(data => {
      let title = data.title.replace(/\//g, '-')
      console.log(title);
      
      return (
        <div class="product-card-container">
          <Link to={`/${category}/${data.Brands}/${title}/${data.indexValue}`}>
            <div class="img-container">
              <img src={data.images[0]} alt="" />
            </div>

            <div class="details">
              <h3>{data.title.substring(0, 48) + ".."}</h3>

              <div class="rating-review-container">
                <div class="ratingbox">
                  <p class="rating rate">{data.rating}</p>
                  <span class="star rate">★</span>
                </div>
                <div class="reviews">
                  <p>{data.reviews}</p>
                </div>
              </div>
              <div class="price-container">
                <h3 class="main-price">{data.sellingPrice}</h3>
                <p class="false-price">{data.scratchedPrice}</p>
                <p class="discount">{data.discountPercentage}</p>
              </div>
            </div>
            </Link>
            <div class="action-buttons">
              <div class="buy-now-button">
                <h4>BUY NOW</h4>
              </div>
              <div
                class="add-to-cart-button"
                onClick={() => dispatch(addToCartHandler(data))}
              >
                <h4>{checkProductInCart(data)}</h4>
              </div>
            </div>
          </div>
      );
    });
    return productCards;
  }

  return (
    <div class="main-container">{productCardCreator(filterProductList)}</div>
  );
}

