const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create the Card model

class Card extends Model { }

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        front: {
            type: DataTypes.STRING,
            allowNull: false
        },
        back: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interval: {
            type: DataTypes.REAL,
            allowNull: false,
            defaultValue: 0
        },
        repetition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        efactor: {
            type: DataTypes.REAL,
            allowNull: false,
            defaultValue: 2.5
        },
        dueDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deck_id: {
            type: DataTypes.INTEGER,
            references: {
                models: 'deck',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'card'
    }
);

module.exports = Card;