function Grandchild(el) {
  this.el = el;
  this.hoverInHandler = function() {
    this.el.css('background-color', 'green');
  }
  this.hoverOutHandler = function() {
    this.el.css('background-color', 'red');
  }

  this.el.hover(this.hoverInHandler.bind(this), this.hoverOutHandler.bind(this));
}
