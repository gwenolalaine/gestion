var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "collaborateurs.html"
    })
	.when("/collaborateurs", {
        templateUrl : "collaborateurs.html"
    })
	.when("/statistiques", {
        templateUrl : "statistiques.html"
    })
	.when("/activites", {
        templateUrl : "activites.html"
    });
});