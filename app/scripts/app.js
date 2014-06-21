'use strict';

/**
 * @ngdoc overview
 * @name azkvizApp
 * @description
 * # azkvizApp
 *
 * Main module of the application.
 */
angular
  .module('azkvizApp', [
    'ngRoute',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pyramid', {
        templateUrl: 'views/pyramid.html',
        controller: 'PyramidCtrl'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
