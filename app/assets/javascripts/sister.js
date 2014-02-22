function Sister(el) {
  this.el = el;
  this.hoverInHandler = function() {
    this.el.css('background-color', 'brown');
  }
  this.hoverOutHandler = function() {
    this.el.css('background-color', 'blue');
  }

  AppMessenger.add('hoverIn', this.hoverInHandler.bind(this));
  AppMessenger.add('hoverOut', this.hoverOutHandler.bind(this));
}