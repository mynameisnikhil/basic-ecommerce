import React from "react";
import { Cart } from "./cart";
import { SearchBar } from "./searchbar";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AppBar = () => {
  const productsData = useSelector(state => state.productsData);
  const categoriesList = Object.keys(productsData)
  const Dispatch = useDispatch();
  return (
    <div className="main-header-container">
      <div className="headerContainer">
        <div className="searchLogoCart">
          <img
            onClick={() => Dispatch({ type: "MENU_TOGGLE" })}
            className="logoImg menuIcon"
            src="./iconfinder_menu-alt_134216.svg"
          />
          <Link className="logoImg" to="/">
            <img className="logoImg" src="/ED_Transparent.png" />
          </Link>
          <SearchBar />
          <Link className="cartContainer" to="/cart">
            <Cart />
          </Link>
        </div>
      </div>
      <div className="categories-bar">
        <ul className="categories-list">
          {categoriesList.map(elem =>{
            return (
              <Link to={`/${elem}`}>
                <li className="categories-list-items">{elem}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
