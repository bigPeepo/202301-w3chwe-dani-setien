import Component from "../Component/Component.js";

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

export class PokemonCardComponent extends Component {
  private readonly pokemon: Pokemon;

  constructor(parentElement: Element, pokemon: Pokemon, className = "") {
    super(parentElement, `card${className}`);
    this.pokemon = pokemon;

    this.domElement.className = `card ${this.pokemon.types[0].type.name}`;
  }

  public render() {
    super.render();

    this.domElement.innerHTML = `
    
      <li>
      <img src="${this.pokemon.sprites.other.dream_world.front_default}" height="200" width="200" />
      <div class="card__text">
      <h2>${this.pokemon.name}</h2>
      <span>#${this.pokemon.id}<span>
      </div>
      <div class="card__types-container">
      </div>
      </li>
    `;
  }
}

export default PokemonCardComponent;
