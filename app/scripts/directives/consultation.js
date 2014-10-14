'use strict';

/**
 * @ngdoc directive
 * @name animationProjectApp.directive:consultation
 * @description
 * # consultation
 */
angular.module('animationProjectApp')
    .directive('consultation', function() {
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.text('this is the consultation directive');
                console.log(attrs);
            }
        };
    });
