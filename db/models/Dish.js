const Sequelize = require('sequelize');
const { db } = require('../connection');

const { UUID, UUIDV4, STRING } = Sequelize;

const uuidDefinition = {
	type: UUID,
	primaryKey: true,
	defaultValue: UUIDV4
}; 
//this will create unique Identifier keys, instead of creating the id as '1,2'3,4'5 and etc/
const Dish = db.define('dish', {
    id: uuidDefinition, 
    name: {
        type: STRING,
        allowNull:false
    },
    description: {
        type: STRING,
        allowNull:false
    },
});

module.exports = { Dish };
