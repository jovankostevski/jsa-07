const {Validator} = require('node-input-validator');

const CarSchema = {
    manufacturer: 'required|minLength:2',
    model: 'required|minLength:2',
    year: 'required|integer'
};

const validate = (data) => {
    let v = new Validator(data, CarSchema);
    return v.check();
};

module.exports = {
    validate
};