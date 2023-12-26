const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./databaze/connect');

db.connect();
app.get('/', (request, response) => {
    response.send('Jsi na hlavní stánce milý uživateli!')
})

app.listen(PORT, (err) => {
    console.log(`server běží na port: ${PORT}`)
})