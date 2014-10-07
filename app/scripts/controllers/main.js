'use strict';

/**
 * @ngdoc function
 * @name animationProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animationProjectApp
 */
angular.module('animationProjectApp')
    .controller('MainCtrl', function($scope, $location) {
        $scope.$location = $location;

        $scope.items = [];

        $scope.push = function() {
            $scope.items.push(+new Date());
        };

        $scope.pop = function() {
            $scope.items.pop();
        };
        $scope.items = [{
            'id': '1'
        }, {
            'id': '2'
        }, {
            'id': '3'
        }, {
            'id': '4'
        }, {
            'id': '5'
        }, {
            'id': '6'
        }, {
            'id': '7'
        }, {
            'id': '8'
        }, {
            'id': '9'
        }, {
            'id': '0'
        }, ];

    });
