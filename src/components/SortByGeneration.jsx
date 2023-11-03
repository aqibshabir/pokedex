import React from "react";

const SortByGeneration = () => {
  return (
    <>
      <select name="gen" id="gen">
        <option value="" htmlFor="gen">
          ---
        </option>
        <option value="1" htmlFor="gen">
          Gen I
        </option>
        <option value="2" htmlFor="gen">
          Gen II
        </option>
        <option value="3" htmlFor="gen">
          Gen III
        </option>
        <option value="4" htmlFor="gen">
          Gen IV
        </option>
        <option value="5" htmlFor="gen">
          Gen V
        </option>
        <option value="6" htmlFor="gen">
          Gen VI
        </option>
        <option value="7" htmlFor="gen">
          Gen VII
        </option>
        <option value="8" htmlFor="gen">
          Gen VIII
        </option>
        <option value="9" htmlFor="gen">
          Gen IX
        </option>
      </select>
    </>
  );
};

export default SortByGeneration;
