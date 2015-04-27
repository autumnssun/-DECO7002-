'use strict';
/**
 * @ngdoc service
 * @name stetheeApp.parseAngularService
 * @description
 * # parseAngularService
 * Service in the stetheeApp.
 */
angular.module('animationProjectApp')
    .service('parseAngularService', function(pang) {

        var signIn = function(_userData) {
            //console.log(Parse)
            //console.log('singng')
            // console.log(_userData._userName,_userData._userPassword)
            return Parse.User.logIn(_userData._userName,_userData._userPassword);
        };

        var createdPointerWithPrtObject=function(objPtr){
            return{
                '__type': 'Pointer',
                'className': objPtr.className,
                'objectId': objPtr.parseObjectId
            }
        }


        var logOut = function() {
            pang.User.logOut();
        };

        var register = function(_userData) {
            console.log(_userData);
        };
        var user = {
            signIn: signIn,
            logOut: logOut,
            register: register
        };
        var order = {

        };

        var returnService = {
            user: user,
            order: order,
            createdPointerWithPrtObject:createdPointerWithPrtObject
        };

        return returnService;

    });
