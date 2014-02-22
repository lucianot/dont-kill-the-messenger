function Parent() {
  // Messenger dependency injected
  var messenger = new Messenger()
      child = new Child($('.child'), messenger)
    , sister = new Sister($('.sister'), messenger)
  ;
}

var parent = new Parent();
console.log('Injecting dependencies');