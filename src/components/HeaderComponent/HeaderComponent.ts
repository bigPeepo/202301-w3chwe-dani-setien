import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element, className: string, tag = "div") {
    super(parentElement, className, tag);

    this.domElement = document.createElement(tag);
    this.parentElement = parentElement;
  }

  public render() {
    super.render();

    this.domElement.innerHTML = `<h1>Pokédex: the OGs</h1>
    `;
  }
}

export default HeaderComponent;
