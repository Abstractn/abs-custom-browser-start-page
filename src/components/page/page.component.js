var Page = function () {
  this._init = (componentNode) => {
    this.node = componentNode;
    return this;
  }
  
  this._ready = () => {
    //const randomlIndex = randomIntegerFromRange(0, BACKGROUND_IMAGES_URL.length-1);
    this.node.style.backgroundImage = `url(${BACKGROUND_IMAGES_URL[6]})`;
  }
}
componentManager.registerComponent('page', Page);