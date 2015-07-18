'use strict';

describe('Service: UserAuthFactory', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var UserAuthFactory;
  beforeEach(inject(function (_UserAuthFactory_) {
    UserAuthFactory = _UserAuthFactory_;
  }));

  it('should do something', function () {
    expect(!!UserAuthFactory).toBe(true);
  });

});
