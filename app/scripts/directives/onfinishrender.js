'use strict';

/**
 * @ngdoc directive
 * @name animationProjectApp.directive:onFinishRender
 * @description
 * # onFinishRender
 */
angular.module('animationProjectApp')
    .directive('onFinishRender', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope) {
                if (scope.$last === true) {
                    $timeout(function() {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        };
    });
