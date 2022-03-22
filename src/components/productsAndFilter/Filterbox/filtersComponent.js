import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RangeSlider } from "./priceRangeSlider";
import { FilterApplied } from "./filterApplied";
import { checkedFiltersHandler } from "../../../actions/index";

export function FiltersComponent({category}) {

  const checkedCategory = useSelector(state => state.checkedCategory);
  console.log(checkedCategory);
  
  
  const dispatch = useDispatch();
  const sortOption = useSelector(state => state.sortOption);
  const priceRange = useSelector(state => state.priceRange);

  const filtersObject = useSelector(state => state.filtersObject);
  const filtersToRender = filtersObject[category]
  console.log(filtersToRender);


  
  let filtersKeyList = Object.keys(filtersToRender);
  let filtersList = [];
  filtersKeyList.forEach((value, indice) => {
    let filtersBox = (
      <div class="categories child-rec">
        <div
        class="top-title-clear">
          <h3 key={indice}>{value}</h3>
          <h4>⌄</h4>
        </div>
        <div 
        class="filters filterOpen">
          {filtersToRender[value].map((x, index) => {
            return (
              <p class="filtertext">
                <input
                  type="checkbox"
                  onChange={e =>
                    dispatch(
                      checkedFiltersHandler(
                        e.target,
                        e.target.attributes.filterCategory.value
                      )
                    )
                  }
                  name={x}
                  filterCategory={value}
                  key={index}
                  checked={checkedCategory.values[x]}
                />{" "}
                {x}
              </p>
            );
          })}
        </div>
      </div>
    );

    filtersList.push(filtersBox);
  });

  return (
    <div class="container">
      <FilterApplied />
      <div class="pricerange">
        <RangeSlider />
      </div>

      {filtersList}
    </div>
  );
}
