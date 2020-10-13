const UserValidator = require('../pkg/users/validator');
const UserModel = require('../pkg/users');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    let v = await UserValidator.Validate(req.body, UserValidator.UserLoginSchema);
    if(!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    let user = await UserModel.GetOneByEmail(req.body.email);
    if(user) {
        let pwd = bcrypt.compareSync(req.body.password, user.password);
        if(!pwd) {
            console.log('User not found');
            res.status(403).send('Forbidden');
        } else {
            console.log('user successfully logged in');
            res.status(200).send('ok');
        }
    } else {
        console.log('User not found');
        res.status(404).send('Not found');
    }
};

const refreshToken = async (req, res) => {
    res.status(200).send('ok');
};

const logout = async (req, res) => {
    res.status(200).send('ok');
};

module.exports = {
    login,
    refreshToken,
    logout
}