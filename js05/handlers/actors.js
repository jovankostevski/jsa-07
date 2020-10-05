const actorData = require('../pkg/actors');

const GetAll = (req, res) => {
    actorData.Read()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};

const GetOne = (req, res) => {
    actorData.Read()
        .then(data => {
            if(data[req.params.id] === undefined) {
                throw {message: 'Not found', code: 404}
            }
            res.status(200).send(data[req.params.id]);
        })
        .catch(err => {
            console.error(err);
            let status = 500;
            let message = 'Internal Server Error';
            if(err.code !== undefined) {
                status = err.code;
                message = err.message;
            }
            res.status(status).send(message);
        });
};

const Create = (req, res) => {
    actorData.Read()
        .then(data => {
            let newData = [...data, req.body];
            return actorData.Write(newData);
        })
        .then(() => {
            res.status(201).send(req.body);
        })
        .catch(err => {
            console.error(err);
            let status = 500;
            let message = 'Internal Server Error';
            if(err.code !== undefined) {
                status = err.code;
                message = err.message;
            }
            res.status(status).send(message);
        });
};

const Update = (req, res) => {
    actorData.Read()
        .then(data => {
            if(data[req.params.id] === undefined) {
                throw {message: 'Not found', code: 404}
            }
            data[req.params.id] = req.body;
            return actorData.Write(data);
        })
        .then(() => {
            res.status(204).send(req.body);
        })
        .catch(err => {
            console.error(err);
            let status = 500;
            let message = 'Internal Server Error';
            if(err.code !== undefined) {
                status = err.code;
                message = err.message;
            }
            res.status(status).send(message);
        });
};

const Remove = (req, res) => {
    actorData.Read()
        .then(data => {
            if(data[req.params.id] === undefined) {
                throw {message: 'Not found', code: 404}
            }
            let newData = data.filter((_, i) => {
                return i != req.params.id;
            });
            return actorData.Write(newData);
        })
        .then(() => {
            res.status(204).send('');
        })
        .catch(err => {
            console.error(err);
            let status = 500;
            let message = 'Internal Server Error';
            if(err.code !== undefined) {
                status = err.code;
                message = err.message;
            }
            res.status(status).send(message);
        });
};

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    Remove
};