(function (app) {
    "use strict";

    app.controller("CartDisplayController", CartDisplayController);

    CartDisplayController.$inject = ["$location", "$routeParams", "toaster", "SneakerBuyerService"];
    function CartDisplayController($location, $routeParams, toaster, repository) {
        var vm = this;
        vm.Sneakers = [];
        repository.displayCart( $routeParams.id).then(function (result) {
            vm.Sneakers = result.data;
        });
        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("SneakerBuyer"));
