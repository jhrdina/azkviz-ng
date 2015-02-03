'use strict';

/**
 * @ngdoc function
 * @name azkvizApp.controller:TeamselCtrl
 * @description
 * # TeamselCtrl
 * Controller of the azkvizApp
 */
angular.module('azkvizApp')
  .controller('TeamselCtrl', function($scope, $state, game, utils) {
    var goToPyramid = function() {
      $state.go('pyramid');
    };

    $scope.selectT1 = function() {
      game.curTeam = 1;
      goToPyramid();
    };

    $scope.selectT2 = function() {
      game.curTeam = 2;
      goToPyramid();
    };

    $scope.selectRandom = function() {
      game.curTeam = utils.randInt(2) + 1;
      goToPyramid();
    };
  });