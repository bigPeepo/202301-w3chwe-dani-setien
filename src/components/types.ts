interface ComponentStructure {
  domElement: Element;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;

export interface BackendResponse {
  id: number;
  pokemon: Pokemon;
}

export interface Pokemon {
  name: string;
  id: number;
  types: TypeInfo[];
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface TypeInfo {
  type: {
    name: string;
  };
}
