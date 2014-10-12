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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page_a', {
        templateUrl: 'views/page_a.html',
        controller: 'PageACtrl'
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
