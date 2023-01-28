import Component from "../Component/Component.js";

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
  }
}

export default ButtonComponent;
