function Parent() {
  var child = new Child($('.child'))
    , sister = new Sister($('.sister'))
  ;
}

// Mediator on global scope
var AppMessenger = new Messenger();

var parent = new Parent();
console.log('Global mediator');
