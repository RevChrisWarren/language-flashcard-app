const Card = require('./Card');
const User = require('./User');
const Deck = require('./Deck');


//create associations
User.hasMany(Deck, {
    foreignKey: 'user_id'
});

Deck.belongsTo(User, {
    foreignKey: 'user_id'
});

// User.hasMany(Card, {
//     foreignKey: 'user_id'
// });

// Card.belongsTo(User, {
//     foreignKey: 'user_id'
// });

Deck.hasMany(Card, {
    foreignKey: 'deck_id'
});

Card.belongsTo(Deck, {
    foreignKey: 'deck_id'
});




module.exports = { User, Card, Deck };