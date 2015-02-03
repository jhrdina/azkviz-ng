'use strict';

angular.module('azkvizApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('teamsel', {
        templateUrl: 'core/teamsel/teamsel.html',
        controller: 'TeamselCtrl'
      });
  });