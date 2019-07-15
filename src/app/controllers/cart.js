
var Cart = require('../models/cart.js');

module.exports.add = async function add(request, callback) {
    var cart = new Cart();
    cart.add(request, function (error, sneaker) {
        callback(error, sneaker);
    });
}



module.exports.getCartByOwnerId = async function getCartByOwnerId(request, callback) {
    var cart = new Cart();
    cart.getCartByOwnerId(request, function (error, sneakers) {
        callback(error, sneakers);
    });
}