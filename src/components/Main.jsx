import React, { useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import Controls from "./Controls";
import Card from "./Card";
import Sort from "./Sort";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemon,
  setPokemon,
  setSearch,
  selectSearch,
} from "../features/counter/counterSlice";
import allPokemon from "../name.json";

const Main = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  const search = useSelector(selectSearch);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const getPokemon = async () => {
    try {
      const { data } = await axios.get(url);
      const temp = [];
      for (let i = 0; i < data.results.length; i++) {
        const item = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`
        );
        temp.push(item.data);
        console.log(temp);
      }
      dispatch(setPokemon(temp));
    } catch (e) {
      console.log(e, "API is down, try again later");
    }
  };

  const handleSearch = async () => {
    try {
      const items = allPokemon.results.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      const temp = [];
      for (let i = 0; i < items.length; i++) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${items[i].name}`
        );
        temp.push(data);
      }

      dispatch(setPokemon(temp));
    } catch (e) {
      console.log(e, "Pokemon not found or API is down");
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      <Heading className="heading" />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Pokemon"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <button onClick={handleSearch}>Submit</button>
      </div>
      <Sort />
      <div className="pokemonContainer">
        {pokemon.map((p, i) => (
          <Card
            id={p.id}
            name={p.name}
            image={
              p.sprites.other.home.front_default ||
              p.sprites.other["official-artwork"].front_default ||
              p.sprites.other.dream_world.front_default
            }
            type={p.types[0].type.name}
            type2={p.types[1] ? p.types[1].type.name : ""}
            key={i}
          />
        ))}
      </div>
      <Controls getPokemon={getPokemon} />
    </>
  );
};

export default Main;
