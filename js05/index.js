// import libraries
const express = require('express');
const bodyParser = require('body-parser');

//import local modules
const config = require('./pkg/config');
const movies = require('./handlers/movies');
const actors = require('./handlers/actors')

// api setup
const api = express();

// middleware setup
api.use(bodyParser.json());

// routes setup
api.get('/movies', movies.GetAll);
api.get('/movies/:id', movies.GetOne);
api.post('/movies', movies.Create);
api.put('/movies/:id', movies.Update);
api.delete('/movies/:id', movies.Remove);

api.get('/actors', actors.GetAll);
api.get('/actors/:id', actors.GetOne);
api.post('/actors', actors.Create);
api.put('/actors/:id', actors.Update);
api.delete('/actors/:id', actors.Remove);

// start server
api.listen(config.Get('server').port, err => {
    if(err) {
        return console.error(err);
    }
    return console.log(`API started on port ${config.Get('server').port}`);
});