'use strict';

/**
 * @ngdoc function
 * @name animationProjectApp.controller:PaitentslistCtrl
 * @description
 * # PaitentslistCtrl
 * Controller of the animationProjectApp
 */
angular.module('animationProjectApp')
    .controller('PaitentslistCtrl', function($scope, $http) {
        //here we define the enter frame animation
        $scope.time_animation_in = 'flipInTop';
        $scope.time_animnation_out = 'flipOutTop';
        $scope.currentPage = 0;
        $scope.medata = [{
            'key': 'Series 1',
            'values': [
                [1025409600000, 0],
                [1028088000000, -6.3],
                [1030766400000, -5.4],
                [1033358400000, -11.5],
                [1036040400000, -5.2],
                [1038632400000, 0.42]
            ]
        }, {
            'key': 'Series 2',
            'values': [
                [1025409600000, 0],
                [1028088000000, 6.42],
                [1030766400000, 5.31],
                [1033358400000, 11.32],
                [1036040400000, 5.4],
                [1038632400000, 42.53]
            ]
        }];

        $scope.cardAnimation = 'classSlideFromTop';
        $scope.animationClass = 'pagePushRight';
        $scope.hideMain = false;
        $scope.patientList = {};
        var file = 'assets/patients.json';
        //var file = 'assets/one_user.json';
        $http.get(file).success(function(data) {
            $scope.patientList = data.users;
            $scope.patientList.selected = $scope.patientList[0];
        });

        $scope.toogle = function() {
            $scope.hideMain = !$scope.hideMain;
            console.log($scope.hideMain);
        };

        $scope.previousConsultation = function() {
            $scope.cardAnimation = 'my-element';
            console.log($scope.hideMain);
            $scope.hideMain = !$scope.hideMain;
        };
        $scope.loadPaitent = function(_patient) {
            $scope.currentPage = 0;
            $scope.hideMain = false;
            $scope.patientList.selected = _patient;

        };
        $scope.xAxisTickFormatFunction = function() {
            return function(d) {
                return d3.time.format('%b')(new Date(d));
            };
        };

        $scope.$on('ngRepeatFinished', function() {
            PageTransitions.init();
        });
    });
