import React from "react";

const SortByType = () => {
  return (
    <>
      <select name="type" id="type">
        <option value="" htmlFor="type">
          ---
        </option>
        <option value="grass" htmlFor="type">
          Grass
        </option>
        <option value="fire" htmlFor="type">
          Fire
        </option>
        <option value="water" htmlFor="type">
          Water
        </option>
        <option value="electricity" htmlFor="type">
          Electricity
        </option>
        <option value="normal" htmlFor="type">
          Normal
        </option>
        <option value="ice" htmlFor="type">
          Ice
        </option>
        <option value="fighting" htmlFor="type">
          Fighting
        </option>
        <option value="poison" htmlFor="type">
          Poison
        </option>
        <option value="ground" htmlFor="type">
          Ground
        </option>
        <option value="flying" htmlFor="type">
          Flying
        </option>
        <option value="psychic" htmlFor="type">
          Psychic
        </option>
        <option value="bug" htmlFor="type">
          Bug
        </option>
        <option value="rock" htmlFor="type">
          Rock
        </option>
        <option value="rock" htmlFor="type">
          Ghost
        </option>
        <option value="dragon" htmlFor="type">
          Dragon
        </option>
        <option value="dark" htmlFor="type">
          Dark
        </option>
        <option value="steel" htmlFor="type">
          Steel
        </option>
        <option value="fairy" htmlFor="type">
          Fairy
        </option>
      </select>
    </>
  );
};

export default SortByType;
