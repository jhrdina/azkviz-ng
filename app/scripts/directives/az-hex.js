'use strict';

/**
 * @ngdoc directive
 * @name azkvizApp.directive:azHex
 * @description
 * # azHex
 */
angular.module('azkvizApp')
  .directive('azHex', function () {
    return {
      link: function(scope, element, attrs) {
        element.bind('click', function () {
          scope.hexClicked(parseInt(attrs.azHex, 10));
        });
        scope.$watch( function() {
          return scope.pyramid[parseInt(attrs.azHex, 10)];
        }, function(newVal) {
          switch (newVal) {
          case 1:
            element.removeClass('hex3');
            element.addClass('hex1');
            element.removeClass('hex-clickable');
            break;
          case 2:
            element.removeClass('hex3');
            element.addClass('hex2');
            element.removeClass('hex-clickable');
            break;
          case 3:
            element.addClass('hex3');
            break;
          }
        });
      }
    };
  });
