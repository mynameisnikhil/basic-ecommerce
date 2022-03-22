import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortHandler } from "../actions";

export function SortBy() {
  const dispatch = useDispatch();
  const sortOption = useSelector(state => state.sortOption);
  return (
    <div style={{ float: "right", margin: "20px" }}>
      <span>Sort By </span>
      <select
        onChange={e => dispatch(sortHandler(e.target.value))}
        value={sortOption.selected}
      >
        {sortOption.options.map(x => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
}
