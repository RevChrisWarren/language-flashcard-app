const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create the Deck model

class Deck extends Model { }

Deck.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'deck'
    }
);

module.exports = Deck;