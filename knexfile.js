// Update with your config settings.
require("dotenv").config();

const { CLIENT, DATABASE, USERNAME, PASSWORD, HOST, PORT } = process.env;

module.exports = {

  development: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: USERNAME,
      password: PASSWORD,
      host: HOST,
      port: PORT,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
