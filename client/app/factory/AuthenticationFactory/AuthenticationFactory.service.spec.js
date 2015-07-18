'use strict';

describe('Service: AuthenticationFactory', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var AuthenticationFactory;
  beforeEach(inject(function (_AuthenticationFactory_) {
    AuthenticationFactory = _AuthenticationFactory_;
  }));

  it('should do something', function () {
    expect(!!AuthenticationFactory).toBe(true);
  });

});
