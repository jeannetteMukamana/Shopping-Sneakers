(function (app) {
    "use strict";

    app.controller("SneakerAddController", SneakerAddController);

    SneakerAddController.$inject = ["$location", "toaster", "SneakerBuyerService"];

    function SneakerAddController($location, toaster, repository) {
        var vm = this;

        vm.model = {};

        vm.save = function () {
            toaster.pop("wait", "Saving...");

            repository.createSneaker(vm.model).then(function (result) {
                toaster.pop("success", "The Sneaker was saved successfully");

                $location.path("/");
            });
        };

        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("SneakerBuyer"));
