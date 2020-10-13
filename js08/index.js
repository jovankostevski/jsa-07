require('./pkg/db'); // include and start database
const express = require('express');
const bodyParser = require('body-parser');
const cars = require('./handlers/cars');
const config = require('./pkg/config');

const api = express();

api.use(bodyParser.json());

api.get('/cars', cars.GetAll);
api.get('/cars/:id', cars.GetOne);
api.post('/cars', cars.Create);
api.put('/cars/:id', cars.Update);
api.patch('/cars/:id', cars.UpdatePartial);
api.delete('/cars/:id', cars.Remove);

api.listen(config.Get('server').port, err => {
    if(err) {
        return console.error(err);
    }
    console.log(`Services started on port ${config.Get('server').port}`);
});