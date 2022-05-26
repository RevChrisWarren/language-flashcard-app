const { Deck } = require("../models");

const deckData = [
  {
    id: 1,
    name: "Words",
    user_id: "1",
    cardsPerDay: 10,
  },
  {
    id: 2,
    name: "Verbs 1",
    user_id: "1",
    cardsPerDay: 5,
  },
  {
    id: 3,
    name: "Verbs 2",
    user_id: "1",
    cardsPerDay: 3,
  },
  {
    id: 4,
    name: "Adjectives",
    user_id: "2",
    cardsPerDay: 7,
  },
  {
    id: 5,
    name: "Adjectives 2",
    user_id: "3",
    cardsPerDay: 10,
  },
  {
    id: 6,
    name: "Special Characters",
    user_id: "4",
    cardsPerDay: 1,
  },
];

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
