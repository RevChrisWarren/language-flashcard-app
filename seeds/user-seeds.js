const { User } = require('../models');

const userData = [
    {
        id: 1,
        userName:'Russell',
        email: 'russ@email.com',
    },
    {
        id: 2,
        userName:'Michael',
        email: 'Mike@email.com',
    },
    {
        id: 3,
        userName:'Matthew',
        email: 'Matt@email.com',
    },
    {
        id: 4,
        userName:'Chris',
        email: 'Chris@email.com',
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;