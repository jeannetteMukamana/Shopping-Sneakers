"use strict"

var Sneaker = require('../models/sneaker.js');


module.exports.getSneakers = async function getSneakers(request, callback) {
    var sneaker = new Sneaker();
    sneaker.getSneakers(request, function (error, sneakers) {
        callback(error, sneakers);
    });

}

module.exports.getSneakerById = async function getSneakerById(request, callback) {
    var sneaker = new Sneaker();
    sneaker.getSneakerById(request, function (error, sneaker) {
        callback(error, sneaker);
    });
}

module.exports.save = async function save(request, callback) {
    var sneaker = new Sneaker();
    sneaker.save(request, function (error, sneaker) {
        callback(error, sneaker);
    });
}

module.exports.update = async function update(request, callback) {
    var sneaker = new Sneaker();
    sneaker.update(request, function (error, sneaker) {
        callback(error, sneaker);
    });
}


module.exports.remove = async function remove (request, callback) {
    var sneaker = new Sneaker();
    sneaker.remove(request, function (error, sneaker) {
        callback(error, sneaker);
    });
}



