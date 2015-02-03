'use strict';

angular.module('azkvizApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pyramid', {
        templateUrl: 'core/pyramid/pyramid.html',
        controller: 'PyramidCtrl'
      });
  });