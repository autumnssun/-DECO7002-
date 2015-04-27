'use strict';

/**
 * @ngdoc function
 * @name animationProjectApp.controller:QueryscriptCtrl
 * @description
 * # QueryscriptCtrl
 * Controller of the animationProjectApp
 */
angular.module('animationProjectApp')
    .controller('QueryscriptCtrl', function($scope, $http) {


        //Ivomec

        //https://www.kimonolabs.com/api/d2cigwuc?apikey=gNzoWPpwzxXB8KK1Z7uhKdAsnnij8t88
        //http://www.dieutri.vn/d/13-112011/S1706/Diamicron.htm
        var med='Trimethoprim';
        var a=med.substring(0,1);
        console.log(a);
        $http.get('https://www.kimonolabs.com/api/d2cigwuc?apikey=gNzoWPpwzxXB8KK1Z7uhKdAsnnij8t88&kimpath1='+a+'&kimpath4='+med+'.htm&kimmodify=1')
            .success(function(data) {
                $scope.d = data.results.collection2
                console.log($scope.d)

            })
    });
