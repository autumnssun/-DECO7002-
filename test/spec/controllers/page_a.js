'use strict';

describe('Controller: PageACtrl', function () {

  // load the controller's module
  beforeEach(module('animationProjectApp'));

  var PageACtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageACtrl = $controller('PageACtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
