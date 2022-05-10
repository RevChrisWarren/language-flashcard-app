const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Deck.findAll({

    })
        .then(dbDeckData => res.json(dbDeckData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    if (req.session) {
        Deck.create({
            deck_name: req.body.name,
            user_id: req.session.user_id
        })
            .then(dbDeckData => res.json(dbDeckData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
})

router.delete('/:id', (req, res) => {
    Deck.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDeckData => {
            if (!dbDeckData) {
                res.status(404).json({ message: 'No deck found with that id' })
                return
            }
            res.json(dbDeckData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;