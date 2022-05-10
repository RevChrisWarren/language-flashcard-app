const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const cardRoutes = require('./card-routes.js');

const deckRoutes = require('./deck-routes.js');

const withAuth = require('../../utils/auth');


router.use('/users', userRoutes);
router.use('/cards', postRoutes);
router.use('/decks', commentRoutes);

module.exports = router;