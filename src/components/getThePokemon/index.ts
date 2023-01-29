import type { Pokemon } from "../types";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";

const getOnePokemon = async (index: number) => {
  const pokemonStream = await fetch(`${urlApi}${index}`);
  const pokemon = (await pokemonStream.json()) as Pokemon;

  return pokemon;
};

export const getAllThePokemon = () => {
  const pokemons = [];
  const numberOfOgPokemon = 151;

  for (let i = 1; i <= numberOfOgPokemon; i++) {
    pokemons.push(getOnePokemon(i));
  }

  return pokemons;
};

export const pokemons = await Promise.all(getAllThePokemon());
