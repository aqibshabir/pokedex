import { createSlice } from "@reduxjs/toolkit";

const initialState = { pokemon: [] };

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPokemon, setSearch } = counterSlice.actions;

export const selectPokemon = (state) => state.counter.pokemon;
export const selectSearch = (state) => state.counter.search;

export default counterSlice.reducer;
