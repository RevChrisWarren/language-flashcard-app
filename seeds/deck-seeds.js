const { Deck } = require("../models");

const deckData = [
  {
    id: 1,
    name: "Words",
    user_id: "1",
  },
  {
    id: 2,
    name: "Verbs 1",
    user_id: "1",
  },
  {
    id: 3,
    name: "Verbs 2",
    user_id: "1",
  },
  {
    id: 4,
    name: "Adjectives",
    user_id: "2",
  },
  {
    id: 5,
    name: "Adjectives 2",
    user_id: "3",
  },
  {
    id: 6,
    name: "Adjectives 3",
    user_id: "4",
  },
];

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
