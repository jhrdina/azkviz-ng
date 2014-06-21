'use strict';

/**
 * @ngdoc function
 * @name azkvizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the azkvizApp
 */
angular.module('azkvizApp')
  .controller('MainCtrl', function ($scope, $location, Document, game) {
    $scope.openFile = function() {
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click');
      document.getElementById('open').dispatchEvent(event);

      game.newGame();
      game.curTeam = 1;

      $location.path('/pyramid');
    };

    /*newGame()*/
  });
