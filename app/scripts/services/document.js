'use strict';

/**
 * @ngdoc service
 * @name azkvizApp.document
 * @description
 * # document
 * Factory in the azkvizApp.
 */
angular.module('azkvizApp')
  .factory('Document', function (Question) {
    
    var demoJson = [
      {
        text: 'Kolik je na světě debilů?',
        answers: [
          'Nespočet',
          'Málo',
          'Nech mě bejt'
        ]
      },
      {
        text: 'Jak moc stupidní jsou tyto otázky?',
        answers: [
          'Totálně',
          'Moc ne...',
          'Vůbec',
          'Trochu'
        ]
      },
      {
        text: 'Proč existuje život?',
        answers: [
          'Protože práce šlechtí',
          'Protože se létající špagetové monstrum ožralo a stvořilo tuhle zhovadilou nahovnokrám planetu, která jde na nervy každýmu druhýmu člověku..'
        ]
      }
    ];

    var questions = [];

    function Document() {}

    Document.getQuestionsArray = function () {
      return jQuery.extend(true, [], questions);
      //return angular.copy(questions);
    };

    Document.parseJson = function (json) {
      angular.forEach(json, function(value) {
        this.push(Question.fromJson(value));
      }, questions);
    };

    Document.isEmpty = function () {
      return questions.length() === 0;
    };

    Document.parseJson(demoJson);

    // Public API here
    return Document;
  });
