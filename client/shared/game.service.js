'use strict';

/**
 * @ngdoc service
 * @name azkvizApp.game
 * @description
 * # game
 * Factory in the azkvizApp.
 */
angular.module('azkvizApp')
  .factory('game', function (Document, utils) {
    
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

    Game.isHexAvailable = function(hexIndex) {
      return Game.pyramid[hexIndex] !== Game.hexState.TEAM0 &&
             Game.pyramid[hexIndex] !== Game.hexState.TEAM1;
    };

    Game.getRandomQuestion = function () {
      if (remainingQuestions.length === 0) {
        remainingQuestions = Document.getQuestionsArray();
      }

      var i = utils.randInt(remainingQuestions.length);
      var question = remainingQuestions[i];
      remainingQuestions.splice(i, 1);
      return question;
    };

    Game.toggleTeam = function () {
      if (Game.curTeam === Game.hexState.TEAM0) {
        Game.curTeam = Game.hexState.TEAM1;
      } else {
        Game.curTeam = Game.hexState.TEAM0;
      }
    };

    // Public API here
    return Game;
  });
