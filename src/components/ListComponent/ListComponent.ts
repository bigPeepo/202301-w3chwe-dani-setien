import PokemonCardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";

import { pageComponentElement } from "../../index.js";
import type { Pokemon } from "../types.js";

export class ListComponent extends Component {
  private readonly pokemons: Pokemon[];

  constructor(pokemonArray: Pokemon[]) {
    super(pageComponentElement, "list");
    this.pokemons = pokemonArray;
    this.domElement = document.createElement("ul");
    this.domElement.className = "list";
  }

  public render() {
    super.render();
    this.domElement.innerHTML = `


        ${this.pokemons.map(() => '<li class="pokemon"></li>').join("")}


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

  delete() {
    this.domElement.innerHTML = "";
  }
}
