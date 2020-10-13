const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        full_name: String,
        email: String,
        password: String,
        birthday: Date,
        phone: String
    },
    'users'
);

const Create = (data) => {
    let u = new User(data);
    return u.save();
};

const GetAll = () => {
    return User.find({});
};

const GetOne = (id) => {
    return User.find({_id: id});
};

const GetOneByEmail = (email) => {
    return User.findOne({email: email});
};

const Update = (id, data) => {
    return User.update({_id: id}, data);
};

const Remove = (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    Create,
    GetAll,
    GetOne,
    GetOneByEmail,
    Update,
    Remove
}