function api(app) {
    var mongojs = require("mongojs");

    var db = mongojs("SneakerBuyer", ["Sneakers"]);

    var SneakerController = require('./controllers/sneaker.js');
    var CartController = require('./controllers/cart.js');


    /**
     * Getting the list of latest sneakers
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */
    app.get("/api/Sneaker", function (request, response) {
        if (request == null || request == undefined) {
            response.status(400);
        }
        else {
            SneakerController.getSneakers(request, function (error, sneakers) {
                if (error)
                    response.status(500);
                response.status(200).json(sneakers);
            })
        }

    });



    /**
     * Getting details of user selected sneaker
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */

    app.get("/api/Sneaker/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            SneakerController.getSneakerById(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        }
    });


    /**
         * Saving a sneaker
         * @param {JSON} req
         * @param {JSON} res
         * @return{json(array)} chats
         * 500: unexpected condition has occured on server side
         * 200: chats has beeen retreived successfully
         * 400: client side error  ie. one or more parameters missing
         */

    app.post("/api/Sneaker", function (request, response) {
        if (request == null || request == undefined) {
            response.status(400);
        }
        else {
            SneakerController.save(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        }

    });

    /**
     * Updating a sneaker
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */

    app.put("/api/Sneaker/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            SneakerController.update(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        }
    });
    
    /**
     * Deleting  a sneaker
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */
    app.delete("/api/Sneaker/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            SneakerController.remove(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        }
        
    });


     
    /**
     * Getting the cart for a specific user
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */
    app.get("/api/Cart/:userID", function (request, response) {
        if (request == null || request == undefined || request.params.userID == null || request.params.userID == undefined) {
            response.status(400);
        }
        else {
            CartController.getCartByOwnerId(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        
        }
        
    });



    /**
     * Adding sneaker to the cart
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     * 
     * 
     */
   // app.post("/api/Cart/:userId:sneakerId")
    app.post("/api/Cart/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            CartController.add(request, function (error, sneaker) {
                if (error)
                    response.status(500);
                response.status(200).json(sneaker);
            })
        }
        
    });
    
};



module.exports = api;
