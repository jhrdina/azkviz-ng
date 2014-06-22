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

    Document.parseXLSX = function (data) {
      var toAddress = function (row, col) {
        var rowStr = (row + 1).toString();
        var colStr = String.fromCharCode('A'.charCodeAt(0) + col);
        return colStr + rowStr;
      };

      var wb = XLSX.read(data, {type: 'binary'});

      var sheet = wb.Sheets[wb.SheetNames[0]];
      
      var col = 0,
          row = 0,
          cell;
      while (sheet[toAddress(row, col)] !== undefined) {

        while ((cell = sheet[toAddress(row, col)]) !== undefined) {
          
          if (col === 0) {
            questions[row] = new Question(cell.v);
          } else if (col === 1) {
            questions[row].answers.push(cell.v);
            questions[row].$correctAnswer = cell.v;
          } else {
            questions[row].answers.push(cell.v);
          }
          
          col++;
        }
        console.log(questions[row]);
        col = 0;
        row++;
      }
    };

    Document.isEmpty = function () {
      return questions.length() === 0;
    };

    //Document.parseJson(demoJson);

    // Public API here
    return Document;
  });
