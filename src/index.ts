import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";

import Component from "./components/Component/Component.js";
import { pokemons } from "./components/getThePokemon/index.js";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { ListComponent } from "./components/ListComponent/ListComponent.js";

const pageComponent = new Component(document.body, "page-container", "div");
pageComponent.render();

export const pageComponentElement = document.querySelector(".page-container");
const headerComponent = new HeaderComponent(
  pageComponentElement,
  "header",
  "header"
);
headerComponent.render();

const mySquadButton = new ButtonComponent(
  headerComponent.domElement,
  "btn my-squad"
);
mySquadButton.render();

export const pokeList = new ListComponent(pokemons);
pokeList.render();
