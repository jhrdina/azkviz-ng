'use strict';

describe('Directive: azHex', function () {

  // load the directive's module
  beforeEach(module('azkvizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<az-hex></az-hex>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the azHex directive');
  }));
});
