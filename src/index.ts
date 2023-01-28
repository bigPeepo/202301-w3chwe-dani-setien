import Component from "./components/Component/Component.js";

const root = document.querySelector(".root");

const pageComponent = new Component(root, "page-container", "div");
pageComponent.render();
