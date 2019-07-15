(function (app) {
    "use strict";

    app.controller("SneakerEditController", SneakerEditController);

    SneakerEditController.$inject = ["$routeParams", "$location", "toaster", "SneakerBuyerService"];

    function SneakerEditController($routeParams, $location, toaster, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getSneaker(id).then(function (result) {
            vm.model = result.data;
        });

        vm.save = function () {
            toaster.pop("wait", "Saving...");

            repository.updateSneaker(id, vm.model).then(function (result) {
                toaster.pop("success", "The changes were saved successfully");

                $location.path("/Sneaker/details/" + id);
            });
        };

        vm.cancel = function () {
            $location.path("/Sneaker/details/" + id);
        };
    };
})(angular.module("SneakerBuyer"));
