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

    var propagateState = game.hexState.BLACK;

    $scope.selectAnswer = function(index) {
      if ($scope.isAnswered) {
        return;
      }

      if ($scope.question.answers[index] === $scope.question.$correctAnswer) {
        propagateState = game.curTeam;
      }

      $scope.selectedAnswer = index;
      $scope.isAnswered = true;
    };

    $scope.myEnd = function() {
      $location.path('pyramid');
      $scope.$apply();
      game.pyramid[game.curHex] = propagateState;
      game.toggleTeam();
    };
  });
