/***
 * Mediator pattern
 */
function Messenger() {
  this.channels = {};

  this.add = function(channel, callback) {
    if(! this.channels.hasOwnProperty(channel)) {
      this.channels[channel] = [];
    }
    this.channels[channel].push(callback);
    return true;
  }

  this.notify = function(channel) {
    var args = Array.prototype.slice.call(arguments)
      , topic = args.shift()
    ;

    if(! this.channels.hasOwnProperty(channel)) {
      return false;
    }

    this.channels[channel].forEach(function(callback) {
      callback.apply(undefined, args);
      return true;
    });
  }
}

function NullMessenger() {
  this.add = function() {}
  this.notify = function() {}
}
