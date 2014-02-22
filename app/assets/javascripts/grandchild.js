function Grandchild(el) {
  this.el = el;
  this.hoverInHandler = function() {
    this.el.css('background-color', 'pink');
    AppMessenger.notify('hoverIn');
  }
  this.hoverOutHandler = function() {
    this.el.css('background-color', 'yellow');
    AppMessenger.notify('hoverOut');
  }

  this.el.hover(this.hoverInHandler.bind(this), this.hoverOutHandler.bind(this));
}
