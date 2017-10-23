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
    })
    .when("/ajoutCollaborateur", {
        templateUrl : "ajoutCollaborateur.html"
    })
    .when("/modifCollaborateur", {
        templateUrl : "modificationCollaborateur.html"
    });
});