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
    };

    $scope.onFileSelect = function($files) {
      var reader = new FileReader();

      reader.onload = function(e) {
        Document.parseXLSX(e.target.result);
        
        game.newGame();
        game.curTeam = 1;

        $scope.$apply(function() {
          $location.path('/teamsel');
        });
      };

      reader.readAsBinaryString($files[0]);
    };
  });
