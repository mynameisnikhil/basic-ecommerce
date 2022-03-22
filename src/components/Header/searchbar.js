import { Fragment } from "react";
import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { searchHandler } from "../../actions";




export const SearchBar = () => {
  const searchSuggester = {};
  const searchValue = useSelector(state => state.searchValue)
  const searchSuggestions = useSelector(state => state.searchSuggestions)
  const dispatch = useDispatch()
  const filteredSearch = searchSuggestions.filter(search => search.toLowerCase().startsWith(searchValue.toLowerCase()))
  
  
  return (
    <Fragment>
      <div className="searchSuggestionContainer">
        <div className="searchBarAndBtn">
          <input
            onChange={e => dispatch(searchHandler(e.target.value))}
            value={searchValue}
            className="searchBar"
            placeHolder=" 🔎&nbsp; Search for anything . . ."
            type="text"
            name="search"
          />
          <button className="searchBtn"> Search </button>
        </div>
       {searchValue ?  
        <div className="searchSuggester">
          {filteredSearch.map(s => {
            return (
              <div className="suggestions">
                <p>{"🔎"} &nbsp; {s}</p>
              </div>
            );
          })}
        </div> 
        : null }
      </div>
    </Fragment>
  );
};
