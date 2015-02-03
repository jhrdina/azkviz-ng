'use strict';

angular.module('azkvizApp')
  .controller('MainCtrl', function($scope, $state, Document, game) {

    $scope.onFileSelect = function($files) {
      var reader = new FileReader();

      reader.onload = function(e) {
        Document.parseXLSX(e.target.result);

        game.newGame();
        game.curTeam = 1;

        $scope.$apply(function() {
          $state.go('teamsel');
        });
      };

      reader.readAsBinaryString($files[0]);
    };
  });