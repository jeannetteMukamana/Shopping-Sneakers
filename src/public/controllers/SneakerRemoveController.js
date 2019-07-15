(function (app) {
    "use strict";

    app.controller("SneakerRemoveController", SneakerRemoveController);

    SneakerRemoveController.$inject = ["$location", "$routeParams", "toaster", "SneakerBuyerService"];

    function SneakerRemoveController($location, $routeParams, toaster, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getSneaker(id).then(function (result) {
            vm.model = result.data;
        });

        vm.remove = function () {
            toaster.pop("wait", "Removing...");

            repository.deleteSneaker(id).then(function (result) {
                toaster.pop("success", "The Sneaker was removed successfully");

                $location.path("/");
            });
        };

        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("SneakerBuyer"));
