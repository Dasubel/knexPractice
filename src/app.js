const { response } = require('express');
const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.get('/pets', (req, res) => {
    knex
        .select('*')
        .from('pet')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.status(200).json(petNames)
        })
})

app.listen(port, () => {
    console.log('Your Knex and Express application is runnning successfully.')
})