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
    $scope.team = game.curTeam;

    $scope.question = game.getRandomQuestion();
    $scope.question.shuffleAnswers();

    var propagateState = game.hexState.BLACK;

    $scope.myEnd = function() {
      $location.path('pyramid');
      $scope.$apply();
      game.pyramid[game.curHex] = propagateState;
      game.toggleTeam();
    };


    /* ================ */
    /* Multiple choices */
    /* ================ */

    $scope.selectedAnswer = -1;
    $scope.correctAnsIndex = $scope.question.answers.indexOf($scope.question.$correctAnswer);

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


    /* ========== */
    /* One answer */
    /* ========== */

    $scope.oneAnsVisible = false;
    $scope.oneAnsState = -1; /* -1: Not selected, 0: Wrong, 1: Correct */
    $scope.setOneAnsState = function(state) {
      $scope.oneAnsState = state;

      propagateState = state === 1 ? game.curTeam : game.hexState.BLACK;

      if (state !== -1) {
        $scope.isAnswered = true;
      }
    };
  });
