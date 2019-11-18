const Sequelize = require('sequelize');
const { db } = require('../connection');

const { UUID, UUIDV4, STRING, BOOLEAN } = Sequelize;

const uuidDefinition = {
	type: UUID,
	primaryKey: true,
	defaultValue: UUIDV4
}; 

const Person = db.define('person', {
    id: uuidDefinition,
    name: {
        type: STRING,
        allowNull:false 
    },
    isAttending: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    includeDishes: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

module.exports = { Person };
