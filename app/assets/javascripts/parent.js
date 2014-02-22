function Parent() {
  var child = new Child($('.child'))
    , sister = new Sister($('.sister'))
  ;

  this.hoverInHandler = function() {
    sister.hoverInHandler();
  }
  this.hoverOutHandler = function() {
    sister.hoverOutHandler();
  }

  child.messenger.add('hoverIn', this.hoverInHandler.bind(this));
  child.messenger.add('hoverOut', this.hoverOutHandler.bind(this));
}

var parent = new Parent();
console.log('Chaining messages');
