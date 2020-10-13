const UserModel = require('../pkg/users');
const UserValidator = require('../pkg/users/validator');
const bcrypt = require('bcryptjs');

const create = async (req, res) => {
    let v = await UserValidator.Validate(UserValidator.UserCreationSchema);
    if(!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    if(req.body.password !== req.body.password2) {
        return res.status(400).send('Bad request [passwords missmatch]');
    }
    let u = await UserModel.GetOneByEmail(req.body.email);
    if(u != null) {
        console.log('user validation error');
        return res.status(400).send('Bad request [user exists]');
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    try {
        let out = await UserModel.Create(req.body);
        out.__v = null;
        out.password = null;
        return res.status(201).send(out);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    res.status(200).send('ok');
};

const getOne = async (req, res) => {
    res.status(200).send('ok');
};

const update = async (req, res) => {
    res.status(200).send('ok');
};

const remove = async (req, res) => {
    res.status(200).send('ok');
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove
}