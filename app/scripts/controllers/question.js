'use strict';

/**
 * @ngdoc function
 * @name azkvizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the azkvizApp
 */
angular.module('azkvizApp')
  .controller('QuestionCtrl', function ($scope, $location, game) {

    $scope.isAnswered = false;
    $scope.selectedAnswer = -1;

    $scope.question = game.getRandomQuestion();
    $scope.question.shuffleAnswers();
    $scope.correctAnsIndex = $scope.question.answers.indexOf($scope.question.$correctAnswer);

    $scope.selectAnswer = function(index) {
      if ($scope.isAnswered) {
        return;
      }

      if ($scope.question.answers[index] === $scope.question.$correctAnswer) {
        game.pyramid[game.curHex] = game.curTeam;
      } else {
        game.pyramid[game.curHex] = game.hexState.BLACK;
      }

      console.log(game.pyramid);

      $scope.selectedAnswer = index;
      $scope.isAnswered = true;
    };

    $scope.myEnd = function() {
      $location.path('pyramid');
    };
  });
