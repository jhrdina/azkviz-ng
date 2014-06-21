'use strict';

angular.module('azkvizApp')
  .controller('PyramidCtrl', function ($scope, $location, game) {
    $scope.hexClicked = function(hexNumber) {
      
      game.curHex = hexNumber;

      $location.path('/question');
      $scope.$apply();
    };

    $scope.pyramid = game.pyramid;

    $scope.btnDo = function() {
      game.pyramid[5] = 2;
      console.log($scope.pyramid);
    };
  });
