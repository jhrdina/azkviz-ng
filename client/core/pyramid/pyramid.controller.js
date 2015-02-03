'use strict';

angular.module('azkvizApp')
  .controller('PyramidCtrl', function($scope, $state, game, utils) {

    utils.warnOnExit($scope);

    $scope.hexClicked = function(hexNumber) {
      if (!game.isHexAvailable(hexNumber)) {
        return;
      }

      game.curHex = hexNumber;

      $state.go('question');
      $scope.$apply();
    };

    $scope.getCurTeam = function() {
      return game.curTeam;
    };

    $scope.pyramid = game.pyramid;

    $scope.btnDo = function() {
      game.pyramid[5] = 2;
      console.log($scope.pyramid);
    };

    $scope.goBack = function() {
      $state.go('main');
    };
  });