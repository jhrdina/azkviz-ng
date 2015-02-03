'use strict';

angular.module('azkvizApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'core/main/main.html',
        controller: 'MainCtrl'
      });
  });