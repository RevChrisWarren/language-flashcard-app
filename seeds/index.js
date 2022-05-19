const seedCards =require('./card-seeds');
const seedDecks = require('./deck-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCards();
    console.log('\n-----CARDS SEEDED -----\n');
    await seedDecks();
    console.log('\n----- DECKS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);

};
seedAll();