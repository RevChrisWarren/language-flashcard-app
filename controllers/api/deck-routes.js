const router = require("express").Router();
const { User, Card, Deck } = require("../../models");

router.get("/", (req, res) => {
  Deck.findAll({})
    .then((dbDeckData) => res.json(dbDeckData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (req.session) {
    Deck.create({
      name: req.body.newDeckEntry,
      user_id: req.session.user_id,
    })
      .then((dbDeckData) => res.json(dbDeckData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete("/:id", (req, res) => {
  Card.destroy({
    where: {
      deck_id: req.params.id
    }

  }).then(() => {
    Deck.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbDeckData) => {
        if (!dbDeckData) {
          res.status(404).json({ message: "No deck found with that id" });
          return;
        }
        res.json(dbDeckData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

module.exports = router;
