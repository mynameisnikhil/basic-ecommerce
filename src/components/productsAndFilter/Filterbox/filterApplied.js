import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearAllFilter, clearFilter} from '../../../actions'


export const FilterApplied = () => {
  let checkedCategory = useSelector(state => state.checkedCategory);
  let filtersApplied = checkedCategory.values;
  let filters = Object.keys(filtersApplied)
  let filtersList = filters.filter(x => filtersApplied[x])
  
  const dispatch = useDispatch()
  return (
    <Fragment>
      <div class="filterlist child-rec">
        <div class="top-title-clear">
          <h3>Filter</h3>
          <a href="#">
            <h5 onClick={() => dispatch(clearAllFilter())}>Clear all</h5>
          </a>
        </div>

        <div class="filterapplied">
          {filtersList.map(f => (
            <p>
              <span onClick={e => dispatch(clearFilter(f))}>✗</span> {f}
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
