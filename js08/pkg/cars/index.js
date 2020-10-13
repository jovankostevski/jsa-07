const mongoose = require('mongoose');

const Car = mongoose.model(
    'Car',
    {
        manufacturer: String,
        model: String,
        year: Number
    },
    'cars'
);

const GetAll = () => {
    return Car.find({});
};

const GetOne = (id) => {
    return Car.find({_id: id});
};

const Create = (data) => {
    let u = new Car(data);
    return u.save();
};

const Update = (id, data) => {
    return Car.update({_id: id}, data);
};

const UpdatePartial = (id, data) => {
    return Car.update({_id: id}, data);
};

const Remove = (id) => {
    return Car.deleteOne({_id: id});
};

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    UpdatePartial,
    Remove
};