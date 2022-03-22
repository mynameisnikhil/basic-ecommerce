import { ecomdata } from "./ecomdata";
import { combineReducers } from "redux";
import { checkedCategory } from "./checkedCategory";
import { sortOption } from "./sortOption";
import { priceRange } from "./priceRange";
import { SideMenuToggle } from "./menuToggle";
import { productsData } from "./productsData";
import {filtersObject} from './filtersReducer'
import {cartItems} from './cartReducer/cartitems'
import {searchSuggestions} from './searchSuggestionReducer/searchSuggestions'
import { searchValue } from "./searchSuggestionReducer/searchValue";

const allReducers = combineReducers({
  ecomdata,
  checkedCategory,
  sortOption,
  priceRange,
  SideMenuToggle,
  productsData,
  filtersObject,
  cartItems,
  searchSuggestions,
  searchValue
});

export default allReducers;
