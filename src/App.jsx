import { useState } from "react";

import axios from "axios";
import { v4 as uuid } from "uuid";

import "./App.css";
import Card from "./components/Card";

let num = 1;
function App() {
  const [pokemon, setPokemon] = useState([]);

  const getNewPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${num++}`)
      .then((res) => {
        const data = res.data;

        const name = data.name;
        const image = data.sprites.other.dream_world.front_default;

        console.log(data);

        setPokemon([
          ...pokemon,
          {
            id: uuid(),
            name,
            image,
          },
        ]);
      })
      .catch((e) => {
        console.log(`error: ${e}`);
      });
  };
  return (
    <>
      <h1 className="text-8xl">Pokedex</h1>
      <button onClick={() => getNewPokemon()} className="mt-10">
        generate
      </button>
      <div>
        <ul>
          {pokemon.map((p) => (
            <li key={p.id}>
              <Card data={p} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
