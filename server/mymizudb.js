const knex = require('knex');


const mymizudb = knex({
    client: "pg",
    connection: {
        host: 'app-acb70568-8e91-4a84-82ba-23f44b00eccb-do-user-6360571-0.b.db.ondigitalocean.com',
        port: '25060',
        user: 'db-ccevent',
        password: 'bp662nmgax6pz5iz',
        database: 'db-ccevent',
        ssl: { rejectUnauthorized: false },
    }

/*     process.env.MYMIZUDB_URL ||
    `postgres://db-ccevent:bp662nmgax6pz5iz@app-acb70568-8e91-4a84-82ba-23f44b00eccb-do-user-6360571-0.b.db.ondigitalocean.com:25060/db-ccevent?ssl=true`,
  searchPath: "public", */
//   rejectUnauthorized: false
});

module.exports = mymizudb;