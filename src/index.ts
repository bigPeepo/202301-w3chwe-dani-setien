import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";

import Component from "./components/Component/Component.js";
import { pokemons } from "./components/getThePokemon/index.js";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";

const root = document.querySelector(".root");

const pageComponent = new Component(root, "page-container", "div");
pageComponent.render();

const pageComponentEl = document.querySelector(".page-container");
const headerComponent = new HeaderComponent(
  pageComponentEl,
  "header",
  "header"
);
headerComponent.render();

const mySquadButton = new ButtonComponent(
  headerComponent.domElement,
  "btn my-squad"
);
mySquadButton.render();
