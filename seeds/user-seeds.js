const { User } = require('../models');

const userData = [
    {
        id: 1,
        username:'Russell',
        email: 'russ@email.com',
        password: 'password123456'
    },
    {
        id: 2,
        username:'Michael',
        email: 'Mike@email.com',
        password: 'password123456'
    },
    {
        id: 3,
        username:'Matthew',
        email: 'Matt@email.com',
        password: 'password123456'
    },
    {
        id: 4,
        username:'Chris',
        email: 'Chris@email.com',
        password: 'password123456'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;