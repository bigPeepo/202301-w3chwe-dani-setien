import { pokeList } from "../../index.js";
import type { Pokemon } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import { ListComponent } from "../ListComponent/ListComponent.js";

interface backendResponse {
  id: number;
  pokemon: Pokemon;
}

class ButtonComponent extends Component {
  constructor(parentElement: Element, className: string) {
    super(parentElement, className);

    this.domElement = document.createElement("button");
    this.parentElement = parentElement;
    this.domElement.className = className;
  }

  public render() {
    super.render();

    this.domElement.textContent = "My Squad";

    this.domElement.addEventListener("click", (post) => {
      post.preventDefault();
      (async () => {
        await fetch(
          "https://two02301-w3chwe-backend-dani-setien.onrender.com/pokemon/"
        )
          .then(async (response) => response.json())
          .then((json: backendResponse[]) => {
            pokeList.delete();

            const teamBuilder = (response: backendResponse[]) => {
              const myTeam: Pokemon[] = [];
              response.forEach((backendElement) =>
                myTeam.push(backendElement.pokemon)
              );

              return myTeam;
            };

            const myTeamPokeList = new ListComponent(teamBuilder(json));
            myTeamPokeList.render();
          });
      })();
    });
  }
}

export default ButtonComponent;
