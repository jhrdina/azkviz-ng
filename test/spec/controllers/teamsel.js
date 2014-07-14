'use strict';

describe('Controller: TeamselCtrl', function () {

  // load the controller's module
  beforeEach(module('azkvizApp'));

  var TeamselCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamselCtrl = $controller('TeamselCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
