var module = angular.module("SneakerBuyer", [
    "ngRoute",
    "ngAnimate",
    "toaster"
]);

(function (app) {
    app.config(function ($routeProvider) {
        var base = "/views/";

        $routeProvider
            .when("/", {
                templateUrl: base + "Sneaker/index.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .when("/Sneaker/add", {
                templateUrl: base + "Sneaker/add.html",
                controller: "SneakerAddController",
                controllerAs: "vm"
            })
            .when("/Sneaker/details/:id", {
                templateUrl: base + "Sneaker/details.html",
                controller: "SneakerDetailsController",
                controllerAs: "vm"
            })
            .when("/Sneaker/edit/:id", {
                templateUrl: base + "Sneaker/edit.html",
                controller: "SneakerEditController",
                controllerAs: "vm"
            })
            .when("/Sneaker/remove/:id", {
                templateUrl: base + "Sneaker/remove.html",
                controller: "SneakerRemoveController",
                controllerAs: "vm"
            }) .when("/cart/:id", {
                templateUrl: base + "Cart/index.html",
                controller: "CartDisplayController",
                controllerAs: "vm"
            })
            .when("/Cart/add/:id", {
                templateUrl: base + "Cart/details.html",
                controller: "CartAddController",
                controllerAs: "vm"
            });
    });
})(angular.module("SneakerBuyer"));
