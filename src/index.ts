import type { Pokemon } from "./components/CardComponent/CardComponent";

const pokemonUrlApi = "https://pokeapi.co/api/v2/pokemon/4";

(async () => {
  const fetchedPokemon = await fetch(pokemonUrlApi);
  const pokemonConsumed = (await fetchedPokemon.json()) as Pokemon;

  return pokemonConsumed;
})();
