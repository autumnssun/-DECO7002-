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
        $scope.hideMain = false;
        $scope.patientList = {};
        //var file='assets/patients.json';
        var file = 'assets/one_user.json';
        $http.get(file).success(function(data) {
            $scope.patientList = [{
                "user_id": 1,
                "name": "User1",
                "mention_name": "user1",
                "email": "user1@email.com",
                "title": "Developer",
                "photo_url": "https://www.hipchat.com/chris.png",
                "last_active": 1360031425,
                "created": 1315711352,
                "status": "away",
                "status_message": "gym, bbl",
                "is_group_admin": 1,
                "is_deleted": 0,
                "address": "Patient Address",
                "allergies": [{
                    "type": "Peanut",
                    "detail": "Peanut detail"
                }, {
                    "type": "Soy",
                    "detail": "soy detail"
                }, {
                    "type": "Fur",
                    "detail": "soy detail"
                }],
                "medications": [{
                    "date": 1315711352,
                    "list": [{
                        "name": "Panadol",
                        "dose": "3 tbl/day"
                    }, {
                        "name": "Paracetanon",
                        "dose": "3 tbl/day"
                    }]
                }],
                "consultation_history": [{
                    "consultation_id": "cslt_1",
                    "date": "consult 1",
                    "summary": " This is a summary of this consultation"
                }, {
                    "consultation_id": "cslt_2",
                    "date": "consult 2",
                    "summary": " This is a summary of this consulation"
                }, {
                    "consultation_id": "cslt_3",
                    "date": "consult 3",
                    "summary": " This is a summary of this consulation"
                }]
            }];
            $scope.patientList.selected = $scope.patientList[0];
            // $scope.$broadcast('myCustomEvent', data.users);
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
            // console.log(_patient);
            $scope.patientList.selected = _patient;

        };

        $scope.next = function() {
            $scope.currentPage--;

        };
        $scope.back = function() {
            $scope.currentPage++;

        };

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
            PageTransitions.init();
        });
    });
