var Searchbar = function () {
  this._init = (componentNode) => {
    this.node = componentNode;
    this.inputNode = this.node.querySelector('.searchbar');
    return this;
  }
  
  this._ready = () => {
    this.manageInputNode();
  }

  this.manageInputNode = () => {
    this.inputNode.focus();
    this.inputNode.select();
    this.inputNode.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const query = this.inputNode.value;
        window.location.href = SEARCH_ENGINE_URL + query;
      }
    });
  }
}
componentManager.registerComponent('searchbar', Searchbar);