'use strict';

describe('Service: question', function () {

  // load the service's module
  beforeEach(module('azkvizApp'));

  // instantiate service
  var question;
  beforeEach(inject(function (_question_) {
    question = _question_;
  }));

  it('should do something', function () {
    expect(!!question).toBe(true);
  });

});
