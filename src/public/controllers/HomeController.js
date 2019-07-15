(function (app) {
    "use strict";

    app.controller("HomeController", HomeController);

    HomeController.$inject = ["$location", "toaster", "SneakerBuyerService"];

    function HomeController($location, toaster, repository) {
        var vm = this;

        vm.Sneakers = [];

        vm.search = {};

        toaster.pop("wait", "Loading sneakers...");

        repository.getSneakers(vm.search).then(function (result) {
            vm.Sneakers = result.data;
        });

        vm.add = function () {
            $location.path("/Sneaker/add/");
        };

        vm.search = function () {
            repository.getSneakers(vm.search).then(function (result) {
                vm.Sneakers = result.data;
            });
        };
        
        vm.details = function (id) {
            $location.path("/Sneaker/details/" + id);
        };

        vm.remove = function (id) {
            $location.path("/Sneaker/remove/" + id);
        };
    };
})(angular.module("SneakerBuyer"));
