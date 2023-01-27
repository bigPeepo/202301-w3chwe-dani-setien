const pokemonUrlApi = "https://pokeapi.co/api/v2/pokemon/";

const getOgPokemonFromApi = async () => {
  const pokemon = await fetch(pokemonUrlApi);
  const pokemonConsumed = await pokemon.json();
};

getOgPokemonFromApi();
