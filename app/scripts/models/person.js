var Backbone = require('backbone');

console.log(Backbone.Model);
//backbone more just creates a shell, a framework, in which you tell it what you want it to do.

//about to create a person model that should have everything a model should have. Through inheritance.
var Person = Backbone.Model.extend({
  initialize: function(){ //this is a noop function baked into backbone that is empty. You have to give it what to do.
    console.log('New Person Created!');
  },

  makeSandwhich: function (){
    return 'ham and cheese';
  }, //be sure to remember this damn cama so you don't break your code.
  sayName: function(){
    console.log(this.firstName + " " + this.lastName)
  }
});//now we have a person object that should have everything a model should be. Through using the extend() method.

console.log(Person);

module.exports = Person; //Whatever we set this equal to will transfer it to our index

//require:
//This is what require(); does under the hood.

// var module = {
//   exports:{}
// };
//
// (function(){
//   /models/person.js => code
//
//   module.exports = Person;
// }());
//
// return module.exports; this is what is returned when you call require();
