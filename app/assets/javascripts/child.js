function Child(el) {
  var grandchild = new Grandchild($('.grandchild'));

  this.messenger = new Messenger();

  this.hoverInHandler = function() {
    this.messenger.notify('hoverIn');
  }
  this.hoverOutHandler = function() {
    this.messenger.notify('hoverOut');
  }

  grandchild.messenger.add('hoverIn', this.hoverInHandler.bind(this));
  grandchild.messenger.add('hoverOut', this.hoverOutHandler.bind(this));
}
