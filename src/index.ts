import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";

import Component from "./components/Component/Component.js";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { ListComponent } from "./components/ListComponent/ListComponent.js";

const root = document.querySelector(".root");

const pageComponent = new Component(root, "page-container", "div");
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

const listComponent = new Component(pageComponentElement, "list", "ul");
listComponent.render();
const listComponentElement = document.querySelector(".list");

const pokeList = new ListComponent();
pokeList.render();
