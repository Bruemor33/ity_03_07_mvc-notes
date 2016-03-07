var Backbone = require('backbone');
var Person = require('./person');

var PersonCollection = Backbone.Collection.extend({
  model: Person //this connects our Person Constructor in our models file.
}); //So when this is used in our index it takes the data we pass and creates a new Person() for each object of data we pass.

module.exports = PersonCollection;
