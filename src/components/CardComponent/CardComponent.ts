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

    const {
      name,
      id,
      sprites: {
        other: {
          dream_world: { front_default: imgUrl },
        },
      },
    } = this.pokemon;

    const type = this.pokemon.types[0].type.name;

    this.domElement.innerHTML = `
    
      <li>
      <img src="${imgUrl}" height="200" width="200" />
      <div class="card__text">
      <h2>${name}</h2>
      <span>#${id}<span>
      </div>
      <span class="card__types type-${type}">${type.toUpperCase()}</span>
      </li>
    `;
  }
}

export default PokemonCardComponent;
