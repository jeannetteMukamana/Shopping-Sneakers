"use strict"
var _this = this;

var Promise = require('es6-promise').Promise
var mongojs = require("mongojs");

var db = mongojs("CartBuyer", ["Carts"]);

var SneakerController= require('../controllers/sneaker.js');

class Cart {

    /*
           Class constructor: to initialize all user attribute for each crated on object

    */
    constructor(sneaker, owner) {
        this.sneaker = sneaker;
        this.omwner = owner;
    }


    getSneaker () {
        return this.sneaker
    }


    getOwner() {
        return this.owner
    }

    

    add  (request, callback){
        //getting the sneaker to add to cart

        SneakerController.getSneakerById(request, function (err, sneaker){

            if(err)
            callback(err, nul)
           
               //Default ownew for my
                sneaker.ownerId= "12345"
                sneaker.ownerNames= "Jeannette Mukamana"


                //defaultquantity to be adde to cart is 1
                sneaker.size.quantity = 1

                //

                db.Carts.insert(sneaker, function (err, sneaker) {
                    if (err)
                    callback(err, null)
                callback(null, sneaker)
                });
            

        })

    }


    getCartByOwnerId(request, callback) {
            var id = request.params.userId;
            db.Carts.find({ ownerId:  "12345" }, function (err, sneakers) {
                if (err)
                    callback(err, null)
                callback(null, sneakers)
            });
     
    }



}

module.exports = Cart