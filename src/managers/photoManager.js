const Photo = require("../models/Photo");


exports.create = (photoData) => {
    let photo = new Photo(photoData);
    return photo.save();
}

exports.getAll = () => {
    return Photo.find({}).lean();
}