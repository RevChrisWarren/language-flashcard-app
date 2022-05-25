const router = require("express").Router();
const Sequelize = require("../config/connection");
const { Deck } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn
  });

});

router.get("/login", (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/edit", (req, res) => {
  Deck.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "name", "user_id"],
  }).then((dbDeckData) => {
    const decks = dbDeckData.map((deck) => deck.get({ plain: true }));
    res.render("edit", { decks, loggedIn: req.session.loggedIn });
  });
});

module.exports = router;
