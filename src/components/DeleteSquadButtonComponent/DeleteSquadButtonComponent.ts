import { pokeList } from "../../index.js";
import Component from "../Component/Component.js";
import { pokemons } from "../getThePokemon/index.js";
import { ListComponent } from "../ListComponent/ListComponent.js";
import type { BackendResponse } from "../types.js";

class DeleteSquadButtonComponent extends Component {
  constructor(parentElement: Element, className: string) {
    super(parentElement, className);

    this.domElement = document.createElement("button");
    this.parentElement = parentElement;
    this.domElement.className = "btn delete-squad";
  }

  public render() {
    super.render();

    this.domElement.textContent = "Delete Squad";

    this.domElement.addEventListener("click", (post) => {
      post.preventDefault();
      (async () => {
        await fetch(
          "https://two02301-w3chwe-backend-dani-setien.onrender.com/pokemon/"
        )
          .then(async (response) => response.json())
          .then((json: BackendResponse[]) => {
            const deleteOnePokemon = async (id: number) => {
              await fetch(
                `https://two02301-w3chwe-backend-dani-setien.onrender.com/pokemon/${id}`,
                {
                  method: "DELETE",
                }
              );
            };

            const deleteMyTeam = (response: BackendResponse[]) => {
              response.forEach(async (element: BackendResponse) => {
                await deleteOnePokemon(element.id);
              });
            };

            deleteMyTeam(json);
          });
      })();
    });
  }
}

export default DeleteSquadButtonComponent;
