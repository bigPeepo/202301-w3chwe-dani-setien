export interface Pokemon {
  name: string;
  id: number;
  types: TypeInfo[];
  height: number;
  weight: number;
  sprites: {
    other: {
      home: string;
    };
  };
}

const pokemonInfoUrl = "https://pokeapi.co/api/v2/pokemon/";

export interface TypeInfo {
  type: {
    name: string;
  };
}
