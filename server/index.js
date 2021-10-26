require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/api', (req, res) => {
    res.send('This is a response from the server');
})

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})