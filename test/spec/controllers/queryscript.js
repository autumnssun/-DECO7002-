'use strict';

describe('Controller: QueryscriptCtrl', function () {

  // load the controller's module
  beforeEach(module('animationProjectApp'));

  var QueryscriptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueryscriptCtrl = $controller('QueryscriptCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
