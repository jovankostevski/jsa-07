const {Validator} = require('node-input-validator');

const UserCreationSchema = {
    full_name: 'required|minLength:5',
    email: 'required|email',
    password: 'required',
    password2: 'required'
};

const UserLoginSchema = {
    email: 'required|email',
    password: 'required'
};

const Validate = (data, schema) => {
    let v = new Validator(data, schema);
    return v.check();
};

module.exports = {
    UserCreationSchema,
    UserLoginSchema,
    Validate
};