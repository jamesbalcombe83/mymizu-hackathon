require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const knex = require('knex');
const mymizudb = require('./mymizudb');
const { link } = require('fs');


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

//returns object ({business_user : business_user, tap : tapData}
app.get('/business_user', async (req, res) => {
    const id = req.query.id;
    try {
        const business_user = await db.select().table('business_users').where({id : id});
        const linkedTaps = await db.select('tap_id').table('tapsToUsers').where({business_user_id:id});
        const tapData = await mymizudb.select().table('taps').where({id:linkedTaps[0].tap_id});
        res.send({business_user : business_user, tap : tapData});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//route to return all refills from a specific tap
app.get('/tapRefills', async (req, res) => {
    const id = req.query.id;
    try {
        const allRefills = await mymizudb.select().table('refills').where({tap_id:id});
        res.send(allRefills)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})