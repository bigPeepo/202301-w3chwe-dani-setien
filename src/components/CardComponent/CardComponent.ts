import Component from "../Component/Component.js";
import type { Pokemon } from "../types.js";

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
      name: nameLowerCase,
      id,
      sprites: {
        other: {
          dream_world: { front_default: imgUrl },
        },
      },
    } = this.pokemon;

    const name = `${nameLowerCase.charAt(0).toUpperCase()}${nameLowerCase.slice(
      1
    )}`;
    const type = this.pokemon.types[0].type.name;

    this.domElement.innerHTML = `
    
      <li>

      <button class="button">
      <span class="button__addition">+<span>
      </button>

      <img src="${imgUrl}" height="200" width="200" />
      <div class="card__text">
      <h2 class="card__name">${name}</h2>
      <span>#${id.toString().padStart(3, "0")}<span>
      </div>
      <span class="card__types type-${type}">${type.toUpperCase()}</span>
      </li>
    `;

    this.domElement
      .querySelector(".button__addition")
      .addEventListener("click", (post) => {
        post.preventDefault();
        (async () => {
          await fetch(
            "https://two02301-w3chwe-backend-dani-setien.onrender.com/pokemon/",
            {
              method: "POST",
              body: JSON.stringify({
                id: this.pokemon.id,
                pokemon: this.pokemon,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
            .then(async (response) => response.json())
            .then(() => {
              this.domElement.classList.add("squad");
            });
        })();
      });
  }
}

export default PokemonCardComponent;
