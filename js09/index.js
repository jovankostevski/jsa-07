require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./handlers/users');
const Auth = require('./handlers/auth');
const config = require('./pkg/config');

const api = express();

api.use(bodyParser.json());

api.post('/users', Users.create);
api.get('/users', Users.getAll);
api.get('/users/:id', Users.getOne);
api.put('/users/:id', Users.update);
api.delete('/users/:id', Users.remove);

api.post('/auth/login', Auth.login);
api.get('/auth/refresh-token', Auth.refreshToken);
api.get('/auth/logout', Auth.logout);

api.listen(config.Get('server').port, err => {
    if(err) {
        return console.error(err);
    }
    console.log(`Services started on port ${config.Get('server').port}`);
});