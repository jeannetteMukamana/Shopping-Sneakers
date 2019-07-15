(function (app) {
    "use strict";

    app.controller("SneakerDetailsController", SneakerDetailsController);

    SneakerDetailsController.$inject = ["$routeParams", "$location", "SneakerBuyerService"];

    function SneakerDetailsController($routeParams, $location, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getSneaker(id).then(function (result) {

            vm.model = result.data;
        });

        vm.edit = function () {
            $location.path("/Sneaker/edit/" + id);
        };
        vm.addToCat = function ( ) {
            $location.path("/Cart/add/" + id);
        };
        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("SneakerBuyer"));
