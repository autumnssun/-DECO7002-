'use strict';

/**
 * @ngdoc directive
 * @name animationProjectApp.directive:knob
 * @description
 * # knob
 */
angular.module('animationProjectApp')
    .directive('knob', function() {
        return {
            template: '<div class="et-wrapper allergies"><div class="et-page card" ng-repeat="allergy in patientList.selected.allergies"><div class="controlGroup "><div class="et-rotate fa fa-chevron-left " et-in="rotateCubeLeftIn" et-out="rotateCubeLeftOut" ng-click="nextAllery()"></div><div class="et-rotate fa fa-chevron-right " et-in="rotateCubeRightIn" et-out="rotateCubeRightOut" ng-click="previousAllery()"></div></div><h3>{{allergy.type}}</h3><p>{{allergy.detail}}</p></div></div>',
            restrict: 'E',
            link: function postLink(scope, element) {
            	console.log('hello');
            	//element.createAnimation().init(element);
                //console.log(element);
                //element.elementation(element);//.init();
                //console.log($.jQuery());
                //element.init();
                //PageTransitions.init();


            }
        };
    });
