function Grandchild(el, messenger) {
  this.el = el;
  this.messenger = messenger || new NullMessenger();

  this.hoverInHandler = function() {
    this.el.css('background-color', 'green');
    this.messenger.notify('hoverIn');
  }
  this.hoverOutHandler = function() {
    this.el.css('background-color', 'red');
    this.messenger.notify('hoverOut');
  }

  this.el.hover(this.hoverInHandler.bind(this), this.hoverOutHandler.bind(this));
}
