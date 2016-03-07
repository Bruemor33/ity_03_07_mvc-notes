console.log("Hello World!");

var Person = require('./models/person');
//Person is set equal here to what we have within out models file.
var PersonCollection = require('./models/person-collection');

//the real representation of our person model
var jimmy = new Person ({ //what is inside the new Person is the data. This raw data makes the real person Jimmy
  age: 42,
  lastName: 'John',
  firstName: 'Jimmy',
});
var wendy = new Person({
  age: 40,
  firstName: 'Wendy',
})

var people = new PersonCollection([ //collection in backbone sets an array. Within this array you just need to pass the object data.
  {age: 42, lastName: 'John', firstName: 'Jimmy'},
  {age: 40, firstName: 'Wendy'} //Since our Collection is set to inherit the model of person, these two objects are set to
]); //new Person()
console.log(people);

people.add({age: 30, lastName: 'will', firstName: 'Will'})//you can add a new person throught just using the .add() method.
//pass an object into your add() method that will take the properties of your new person

people.each(function(person){
  console.log(person.get('firstName'));
  person.sayName();
})

console.log(jimmy);

console.log(jimmy.get('age')); //using .get() is one way we can get data out of our model.
//you would pass the property we want to extract from the model within the .get() method.

console.log(jimmy.set({'age': 65})); //.set() allows me to pass in a change to a property
//After passing a change when you now call a get() on age it has been update with the new value.
console.log(jimmy.get('age'));

console.log(jimmy.makeSandwhich());
