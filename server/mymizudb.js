require('dotenv').config();
const knex = require('knex');

const mymizudb = knex({
    client: "pg",
    connection: {
        host: process.env.MMHOST,
        port: process.env.MMPORT,
        user: process.env.MMUSER,
        password: process.env.MMPASSWORD,
        database: process.env.MMDATABASE,
        ssl: { rejectUnauthorized: false },
    }

});

module.exports = mymizudb;