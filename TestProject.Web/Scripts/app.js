/// <reference path="angular.js" />

var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
    var sortColumn = 'salary';

    var employees = [
        {
            FirstName: "Frylle", LastName: "Bancaso",
            Projects: [
            {
                Name: "DCE",
                Language: "C#"
            }],
            Salary: 29000
        },
        {
            FirstName: "Paule", LastName: "See",
            Projects: [
            {
                Name: "DCE",
                Language: "C#, Asp.Net"
            },
            {
                Name: "CMP",
                Language: "C#, AngularJs"
            }],
            Salary: 150000
        },
        {
            FirstName: "Roj", LastName: "Berana",
            Projects: [
            {
                Name: "DCE",
                Language: "C#, Asp.Net"
            },
            {
                Name: "CMP",
                Language: "C#, AngularJs"
            }],
            Salary: 110000
        },
        {
            FirstName: "Jayson", LastName: "Velaroso",
            Projects: [
            {
                Name: "DCE",
                Language: "C#, Asp.Net"
            },
            {
                Name: "CMP",
                Language: "C#, AngularJs"
            }],
            Salary: 100000
        }
    ];

    $scope.IncreaseSalary = function(employee, increase) {
        employee.Salary++;
    }

    $scope.employees = employees;

    $scope.sortColumn = sortColumn;

    $scope.ChangeSort = function(sortBy) {
        if ($scope.sortColumn == sortBy) {
            $scope.sortColumn = "-" + sortBy;
        } else {
            $scope.sortColumn = sortBy;
        }
    }

    $scope.GetSortClass = function(sortBy) {
       if ($scope.sortColumn == sortColumn) {
            return 'arrow-up' : 'arrow-down';
       }
        return '';
    }
})