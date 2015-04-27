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
        'ui.select',
        'pang'
    ])
    .run(function(pang) {
        //Appplication id, javascrpt jdk key
        pang.initialize('AVGS8etNoYFicKmEhbJfAiiSjfD3MBnc3LtiqF6q', 'Xie4PdzQrgwQ2vBo9mTc1Dpx2eUbuCejiVW3LFG6');
    })
    .config(function($httpProvider) {
    })
    .config(function($routeProvider, uiSelectConfig) {
        uiSelectConfig.theme = 'select2';
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                //controller: 'PaitentslistCtrl'
                controller: 'MainCtrl'
            })
            .when('/paitentsList', {
                templateUrl: 'views/paitentslist.html',
                controller: 'PaitentslistCtrl'
            })
            .when('/sandbox', {
                templateUrl: 'views/sandbox.html',
                controller: 'SandboxCtrl'
            })
            .when('/queryScript', {
                templateUrl: 'views/queryscript.html',
                controller: 'QueryscriptCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
