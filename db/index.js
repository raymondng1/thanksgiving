const { db } = require('./connection');
const { Dish } = require('./models/Dish');
const { Person } = require('./models/Person');

// Create your associations here!
Dish.belongsTo(Person); // not neccearry to create as alias cause personId is unique enough
Person.hasMany(Dish);

module.exports = {
  db,
  Dish,
  Person,
};
