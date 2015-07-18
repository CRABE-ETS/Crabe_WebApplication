'use strict';

describe('Controller: UnauthorizedCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var UnauthorizedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnauthorizedCtrl = $controller('UnauthorizedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
