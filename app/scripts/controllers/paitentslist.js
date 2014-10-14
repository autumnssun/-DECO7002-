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
        $scope.currentPage = 0;

        $scope.cardAnimation = 'classSlideFromTop';
        $scope.animationClass = 'pagePushRight';
        $scope.hideMain = true;
        $scope.patientList = {};
        var file='assets/patients.json';
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
            //$scope.hideMain = false;
        };
        $scope.loadPaitent = function(_patient) {
            $scope.currentPage = 0;
            $scope.hideMain = false;
            $scope.patientList.selected = _patient;

        };

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
            PageTransitions.init();
        });
    });
