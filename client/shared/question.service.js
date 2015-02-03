'use strict';

/**
 * @ngdoc service
 * @name azkvizApp.question
 * @description
 * # question
 * Factory in the azkvizApp.
 */
angular.module('azkvizApp')
  .factory('Question', function (utils) {

    function Question(text) {
      this.text = text || '';
      this.answers = [];
      this.$correctAnswer = null;
    }

    Question.prototype = {
      shuffleAnswers: function () {
        utils.shuffle(this.answers);
      },

      setAnswers: function (answers) {
        this.answers = answers;
        if (this.answers[0] !== undefined) {
          this.$correctAnswer = this.answers[0];
        }
      },
      
      hasOneAnswer: function () {
        return this.answers.length === 1;
      }
    };

    Question.fromJson = function (object) {
      var question = new Question(object.text);
      question.setAnswers(object.answers);
      return question;
    };

    // Public API here
    return Question;
  });
