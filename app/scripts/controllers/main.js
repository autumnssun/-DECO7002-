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
        $scope.animationClass = 'pageFade';

        $scope.$location = $location;

        $scope.items = [];

        $scope.push = function() {
            $scope.items.push(+new Date());
        };

        $scope.pop = function() {
            $scope.items.pop();
        };
        $scope.addHeap = function() {
            console.log('d');
            for (var i = 0; i < 20; i++) {
                $scope.items.push(+new Date() + i);
                console.log($scope.items);
            }
        };
        $scope.clear = function() {
            $scope.items = [];
        };

    });
