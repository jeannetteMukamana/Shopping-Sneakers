"use strict"
var _this = this;

////var mongoSchemas = require("../middleware/schemas.js");
//var DB_Controller = require("../controllers/DB_Controller.js");


var Promise = require('es6-promise').Promise
//var userSchema = mongoSchemas.User;


var mongojs = require("mongojs");

var db = mongojs("SneakerBuyer", ["Sneakers"]);

class Sneaker {

    /*
           Class constructor: to initialize all user attribute for each crated on object

    */
    constructor(brandName, model, sizeAvalability, price, picture, releaseDate) {
        this.brandName = brandName;
        this.model = model;
        this.size= {size: 37, quantity: 20}
        this.price = price;
        this.picture = picture;
        this.releaseDate = releaseDate;
    }


    getBrandName() {
        return this.brandName
    }


    getModel() {
        return this.model
    }

    getSizeAvalability() {
        return this.size
    }

    getPrice() {
        return this.price
    }


    getPicture() {
        return this.picture
    }

    getReleaseDate() {
        return this.releaseDate
    }


    toString() {
        return `${this.brandName}, ${this.model},  ${this.size},  ${this.price},  ${this.picture}, ${this.releaseDate}`;
    }



    getSneakers(request, callback) {
        var MaxNumber = request.query.MaxNumber ? parseInt(request.query.MaxNumber) : 10;
        var brandName = request.query.brandName;
        var model = request.query.model;
        var price = request.query.price;
        var model = request.query.model;
        var size = request.query.size;

        var find = {};

        if (brandName) {
            find.brandName = new RegExp(brandName, "i");
        }

        if (model) {
            find.model = new RegExp(model, "i");
        }

        if (price) {
            find.price = new RegExp(price, "i");
        }

        if (size) {
            find.size = new RegExp(size, "i");
        }

        var fields = {
            brandName: 1,
            model: 1,
            price: 1,
            size: 1,
            releaseDate: 1
        };
        var result = db.Sneakers.find(find, fields).limit(MaxNumber, function (err, sneakers) {
            if (err)
                callback(err, null)
            callback(null, sneakers)

        });

    }


    getSneakerById(request, callback) {
        var id = request.params.id;
        db.Sneakers.findOne({ _id: mongojs.ObjectId(id) }, function (err, sneaker) {
            if (err)
                callback(err, null)
            callback(null, sneaker)
        });
    }

    save(sneaker, callback) {
        sneaker.body.size = {size: 37, quantity: 20} 
        db.Sneakers.insert(sneaker.body, function (err, sneaker) {
            if (err)
                callback(err, null)
            callback(null, sneaker)
        });
    }

    update(request, callback) {
        var id = request.params.id;
        db.Sneakers.findAndModify({
            query: {
                _id: mongojs.ObjectId(id)
            },
            update: {
                $set: {
                    brandName: request.body.brandName,
                    model: request.body.model,
                    price: request.body.price,
                    releaseDate: request.body.releaseDate
                }
            },
            new: true
        }, function (err, sneaker) {
            if (err)
                callback(err, null)
            callback(null, sneaker)

        });

    }

    remove (request, callbac){
        var id = request.params.id;
        db.Sneakers.remove({ _id: mongojs.ObjectId(id) }, function (err, sneaker) {
            if (err)
            callbac(err, null)
         callbac(null, sneaker)

        });
    }

}

module.exports = Sneaker