'use strict';

/**
 * @ngdoc function
 * @name animationProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animationProjectApp
 */
angular.module('animationProjectApp')
    .controller('MainCtrl', function($scope, parseAngularService, pang, $http) {
        $scope.patientList = {};
        $scope.patientList = pang.Collection('patients').build();
        /// old codes started here

        $scope.currentPage = 0;

        $scope.cardAnimation = 'classSlideFromTop';
        $scope.animationClass = 'pagePushRight';
        $scope.hideMain = false;
        //var file = 'assets/patients.json';
        //var file = 'assets/one_user.json';
        // $http.get(file).success(function(data) {
        //     $scope.patientList = data.users;
        //     $scope.patientList.selected = $scope.patientList[0];
        // });

        $scope.toogle = function() {
            $scope.hideMain = !$scope.hideMain;
            console.log($scope.hideMain);
        };

        $scope.previousConsultation = function() {
            $scope.cardAnimation = 'my-element';
            // console.log($scope.hideMain);
            $scope.hideMain = !$scope.hideMain;
        };


        $scope.loadPaitent = function(_patient) {
            $scope.currentPage = 0;
            $scope.hideMain = false;
            $scope.patientList.selected = _patient;
            var createdPointer = parseAngularService.createdPointerWithPrtObject(_patient);
            //run the cloud code: Patientquery with pID Parameter
            Parse.Cloud.run('patientQuery', {
                'pID': _patient
            }, {
                success: function(result) {
                    // result is 'Hello world!'
                    console.log(result)
                },
                error: function(error) {
                    alert('error');
                }
            });
            // $scope.medications = pang.Collection('medications').where({
            //     'precriptionForPatient': createdPointer
            // }).build();
        };


        $scope.$on('ngRepeatFinished', function() {
            PageTransitions.init();
        });
    });
