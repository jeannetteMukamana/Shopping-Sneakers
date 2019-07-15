(function (app) {
    "use strict";

    app.service("SneakerBuyerService", SneakerBuyerService);

    SneakerBuyerService.$inject = ["$log", "$http"];

    function SneakerBuyerService($log, $http) {
        var svc = this;

       var apiUrl = "/api/";

        svc.getSneakers = function (fields) {
            var queryString = [];

            if (fields.MaxNumber) {
                queryString.push("MaxNumber=" + fields.MaxNumber);
            }

            if (fields.brandName) {
                queryString.push("brandName=" + fields.brandName);
            }

            if (fields.model) {
                queryString.push("model=" + fields.model);
            }

            if (fields.price) {
                queryString.push("price=" + fields.price);
            }

            var url = apiUrl + "Sneaker";

            var fullUrl = queryString.length == 0 ? url : [url, "?", queryString.join("&")].join("");

            return $http.get(fullUrl);
        };

        svc.getSneaker = function (id) {
            return $http.get("/api/Sneaker/" + id);
        };

        svc.createSneaker = function (model) {
            return $http.post("/api/Sneaker", model);
        };

        svc.updateSneaker = function (id, model) {
            return $http.put("/api/Sneaker/" + id, model);
        };

        svc.deleteSneaker = function (id) {
            return $http.delete("/api/Sneaker/" + id);
        };

        svc.displayCart = function (id) {
            return $http.get("/api/Cart/" + id);
        };

        svc.addSneakerToCart = function (id) {
            return $http.post("/api/Cart/" + id);
        };
    };
})(angular.module("SneakerBuyer"));
