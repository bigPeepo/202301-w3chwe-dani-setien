interface ComponentStructure {
  domElement: Element;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
