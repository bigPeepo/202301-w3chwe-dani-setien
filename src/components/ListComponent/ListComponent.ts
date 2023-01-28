import type { Pokemon } from "../CardComponent/CardComponent.js";
import PokemonCardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import { pokemons } from "../getThePokemon/index.js";
import { pageComponentElement } from "../../index.js";

export class ListComponent extends Component {
  private readonly pokemons: Pokemon[];

  constructor() {
    super(pageComponentElement, "list");
    this.pokemons = pokemons;
  }

  public render() {
    super.render();
    this.domElement.innerHTML = `
    <div>
      <ul class="list">
        ${this.pokemons.map(() => '<li class="pokemon"></li>').join("")}
      </ul>
    </div>
    `;

    this.domElement
      .querySelectorAll(".pokemon")
      .forEach((pokemonCardContainer, position) => {
        const pokemonCardComponent = new PokemonCardComponent(
          pokemonCardContainer,
          this.pokemons[position],
          "character__card"
        );
        pokemonCardComponent.render();
      });
  }
}
