function Parent() {
  var child;
}

Parent.prototype.initialize = function() {
  this.child = new Child();
  this.child.foo();
}

var parent = new Parent();
parent.initialize();