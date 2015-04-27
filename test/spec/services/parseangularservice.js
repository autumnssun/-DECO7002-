'use strict';

describe('Service: parseAngularService', function () {

  // load the service's module
  beforeEach(module('animationProjectApp'));

  // instantiate service
  var parseAngularService;
  beforeEach(inject(function (_parseAngularService_) {
    parseAngularService = _parseAngularService_;
  }));

  it('should do something', function () {
    expect(!!parseAngularService).toBe(true);
  });

});
