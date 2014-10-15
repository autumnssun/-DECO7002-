'use strict';

describe('Directive: consultation', function () {

  // load the directive's module
  beforeEach(module('animationProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<consultation></consultation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the consultation directive');
  }));
});
