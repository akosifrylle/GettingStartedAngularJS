/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    var employees = [
        { FirstName: "Frylle", LastName: "Bancaso" },
        { FirstName: "Paule", LastName: "See" }
    ];

    $scope.employees = employees;
})