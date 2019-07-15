(function (app) {
    "use strict";

    app.controller("CartAddController", CartAddController);

    CartAddController.$inject = ["$location", "$routeParams", "toaster", "SneakerBuyerService"];

    function CartAddController($location, $routeParams, toaster, repository) {
        var vm = this;
        repository.addSneakerToCart($routeParams.id).then(function (result) {
            toaster.pop("success", "The Sneaker was added to cart successfully");
                var userId = "12345"
            $location.path("/cart/"+userId);
           
        });
        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("SneakerBuyer"));
