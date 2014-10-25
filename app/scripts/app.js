'use strict';

/**
 * @ngdoc overview
 * @name animationProjectApp
 * @description
 * # animationProjectApp
 *
 * Main module of the application.
 */
angular
  .module('animationProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3ChartDirectives',
    'angular.filter',
    'ui.select'
  ])
  .config(function ($routeProvider,uiSelectConfig) {
    uiSelectConfig.theme = 'select2';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PaitentslistCtrl'
        //controller: 'MainCtrl'
      })
      .when('/paitentsList', {
        templateUrl: 'views/paitentslist.html',
        controller: 'PaitentslistCtrl'
      })
      .when('/sandbox', {
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

