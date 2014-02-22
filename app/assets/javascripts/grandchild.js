function Grandchild(el) {
  this.el = el;
  this.hoverInHandler = function() {
    this.el.css('background-color', 'green');
    AppMessenger.notify('hoverIn');
  }
  this.hoverOutHandler = function() {
    this.el.css('background-color', 'red');
    AppMessenger.notify('hoverOut');
  }

  this.el.hover(this.hoverInHandler.bind(this), this.hoverOutHandler.bind(this));
}
