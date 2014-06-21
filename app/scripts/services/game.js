'use strict';

/**
 * @ngdoc service
 * @name azkvizApp.game
 * @description
 * # game
 * Factory in the azkvizApp.
 */
angular.module('azkvizApp')
  .factory('game', function (Document) {
    
    function Game() {}

    Game.curTeam = -1;
    Game.curHex = -1;
    Game.pyramid = [];

    Game.hexState = Object.freeze({
      DEFAULT: 0,
      TEAM0: 1,
      TEAM1: 2,
      BLACK: 3
    });

    var remainingQuestions = [];

    Game.newGame = function () {
      remainingQuestions = Document.getQuestionsArray();
      for (var i = 0; i < 28; i++)
      {
        Game.pyramid[i] = Game.hexState.DEFAULT;
      }
    };

    Game.getRandomQuestion = function () {
      if (remainingQuestions.length === 0) {
        remainingQuestions = Document.getQuestionArray();
      }

      var index = Math.floor(Math.random() * remainingQuestions.length);
      var question = remainingQuestions[index];
      remainingQuestions.splice(index, 1);
      return question;
    };

    // Public API here
    return Game;
  });
