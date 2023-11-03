import React from "react";
import SortByType from "./SortByType";
import SortByGeneration from "./SortByGeneration";

const Sort = () => {
  return (
    <>
      <div className="sortBars">
        <select name="sort" id="sort">
          <option value="" htmlFor="sort">
            ---
          </option>
          <option value="az" htmlFor="sort">
            Sort By: A to Z
          </option>
          <option value="za" htmlFor="sort">
            Sort By: Z to A
          </option>
          <option value="numberAsc" htmlFor="sort">
            Sort By: ID Ascending
          </option>
          <option value="numberDes" htmlFor="sort">
            Sort By: ID Descending
          </option>
        </select>
        <SortByType />
        <SortByGeneration />
      </div>
    </>
  );
};

export default Sort;
