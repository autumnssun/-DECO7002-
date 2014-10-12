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
        $scope.cardAnimation = 'classSlideFromTop';
        $scope.animationClass = 'pagePushRight';
        $scope.hideMain = true;
        $scope.patientList = {};
        $http.get('assets/patients.json').success(function(data) {
            $scope.patientList = data.users;
            console.log($scope.patientList);
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
            $scope.hideMain=false;
            console.log(_patient);
            $scope.patientList.selected =_patient;
        };

        
    });
