const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        full_name: String,
        email: String,
        password: String,
        birthday: Date,
        phone: String,
        register_hash: String,
        active: Boolean
    },
    'users'
);

const Create = (data) => {
    let u = new User(data);
    return u.save();
};

const GetAll = () => {
    return User.find({}, {password: 0});
};

const GetOne = (id) => {
    return User.findOne({_id: id});
};

const GetOneByEmail = (email) => {
    return User.findOne({email: email});
};

const GetOneByHash = (register_hash) => {
    return User.findOne({register_hash: register_hash});
}

const Update = (id, data) => {
    return User.update({_id: id}, data);
};

const Activate = (id) => {
    return User.update({_id: id}, {$set: {active: true}});
};

const Remove = (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    Create,
    GetAll,
    GetOne,
    GetOneByEmail,
    GetOneByHash,
    Update,
    Activate,
    Remove
}