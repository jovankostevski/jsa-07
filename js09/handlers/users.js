const UserModel = require('../pkg/users');
const UserValidator = require('../pkg/users/validator');
const bcrypt = require('bcryptjs');
const mailer = require('../pkg/mailer');
const strings = require('../pkg/strings');

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
        let userData = {
            ...req.body,
            register_hash: strings.randomString(20), 
            active: false
        };
        let out = await UserModel.Create(userData);
        out.__v = null;
        out.password = null;
        //send the welcome email
        let mout = await mailer.sendEmail('WELCOME', {name: req.body.full_name, hash: userData.register_hash}, req.body.email);
        console.log(mout);
        return res.status(201).send(out);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    try {
        let us = await UserModel.GetAll();
        return res.status(200).send(us);
    }catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

const getOne = async (req, res) => {
    try {
        let u = await UserModel.GetOne(req.params.id);
        if(!u) {
            return res.status(404).send('Not found');
        }
        return res.status(200).send(u);
    }catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

const activate = async (req, res) => {
    try {
       let u = await UserModel.GetOneByHash(req.params.register_hash);
       if(u != null) {
        return res.status(400).send('Bad request [link already used]');
       }
       return res.status(204).send('User activated!');
    }catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

const update = async (req, res) => {
    try {
        await UserModel.Update(req.params.id, req.body);
        return res.status(204).send('No content');
    }catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

const remove = async (req, res) => {
    try {
        await UserModel.Remove(req.params.id);
        return res.status(204).send('No content');
    }catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    activate,
    remove
}