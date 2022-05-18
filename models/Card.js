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
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        repetition: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        efactor: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.STRING,
            allowNull: false
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