'use strict';

angular.module('azkvizApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('question', {
        templateUrl: 'core/question/question.html',
        controller: 'QuestionCtrl'
      });
  });