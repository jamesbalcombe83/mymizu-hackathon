const knex = require('knex');

const { MMHOST, MMPORT, MMUSER, MMPASSWORD, MMDATABASE } = process.env;

const mymizudb = knex({
    client: "pg",
    connection: {
        host: MMHOST,
        port: MMPORT,
        user: MMUSER,
        password: MMPASSWORD,
        database: MMDATABASE,
        ssl: { rejectUnauthorized: false },
    }

});

module.exports = mymizudb;