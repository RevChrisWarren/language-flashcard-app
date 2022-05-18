const router = require('express').Router();
const { User, Card, Deck } = require('../../models');

router.get('/', (req, res) => {
    //asscess card model and find all
    Card.findAll({
        where: {
            deck_id: req.body.deck_id
        }

    })
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

router.post('/', (req, res) => {
    //check the session
    if (req.session) {
        Card.create({
            front: req.body.front,
            back: req.body.back,
            deck_id: req.body.deck_id,
            user_id: req.session.user_id,
            interval: req.body.interval,
            repetition: req.body.repetition,
            efactor: req.body.efactor,
            dueDate: req.body.dueDate
        })
            .then(dbCardData => res.json(dbCardData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    }
});

router.delete('/:id', (req, res) => {
    Card.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCardData => {
            if (!dbCardData) {
                res.status(404).json({ message: 'No Card found with that id' })
                return
            }
            res.json(dbCardData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;