const express = require('express');
const app = express();
const port = 8081;

app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log('Your Knex and Express application is runnning successfully.')
})