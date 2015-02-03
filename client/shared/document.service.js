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

    var questions = [];

    function Document() {}

    Document.clear = function() {
      questions = [];
    };

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

      Document.clear();

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
