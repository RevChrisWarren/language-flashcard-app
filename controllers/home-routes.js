const router = require("express").Router();
const Sequelize = require("../config/connection");
const { Deck } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/edit", (req, res) => {
  Deck.findAll({
    attributes: ["id", "name", "user_id"],
  }).then((dbDeckData) => {
    const decks = dbDeckData.map((deck) => deck.get({ plain: true }));
    res.render("edit", { decks });
  });
});

module.exports = router;
