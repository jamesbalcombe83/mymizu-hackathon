require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const knex = require('knex');
const mymizudb = require('./mymizudb');

const db = knex({
    client: 'pg',
    connection: 
        process.env.DATABASE_URL ||
        `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`,
    searchPath: "public",
});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/api', (req, res) => {
    res.send('This is a response from the server');
})

//test route to check connection to the mymizu database
app.get('/test', async (req,res) => {
    try {
        const taps = await mymizudb
          .select('id')
          .table("taps")
          .where({category_id : 4})
          .whereNotNull('name')
        res.send(taps);
      } catch (err) {
        console.error("Error loading refill!", err);
        res.sendStatus(500);
      }
})

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})