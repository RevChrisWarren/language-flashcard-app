const router = require('express').Router();
const { User, Card, Deck } = require('../../models');
const {supermemo} = require('supermemo');



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

// update card content
router.put('/:card_id', (req, res) => {
    //check for session
    if (req.session) {
        console.log(req.session)
        Card.update(
            {
            front: req.body.front,
            back: req.body.back
            },
            {where: {id: req.params.card_id}
        })
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })  
    }
});

// update card for study info
router.patch('/:card_id', async (req, res) => {
    // check for session
    if (req.session) {
        //find card by primary key, create an object with update parameters, execute algorithm modification, save updated card, and send back response
        const modifiedCard = await Card.findByPk(req.params.card_id);
        
        let updateObject = {
            interval: parseInt(modifiedCard.dataValues.interval),
            repetition: parseInt(modifiedCard.dataValues.repetition),
            efactor: parseInt(modifiedCard.dataValues.efactor)
        }
        
        console.log(updateObject);

        updateObject = supermemo(updateObject, req.body.userResponse);

        console.log(updateObject);
        
        modifiedCard.update({
        interval: updateObject.interval,
        efactor: updateObject.efactor,
        repetition: updateObject.repetition    
        })

        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }) 
    }
})

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