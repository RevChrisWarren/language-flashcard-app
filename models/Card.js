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
        lang1_word: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lang2_word: {
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