'use strict';

/**
 * @ngdoc service
 * @name azkvizApp.utils
 * @description
 * # utils
 * Factory in the azkvizApp.
 */
angular.module('azkvizApp')
  .factory('utils', function($window) {

    // Public API here
    return {
      //+ Jonas Raoni Soares Silva
      //@ http://jsfromhell.com/array/shuffle [v1.0]
      shuffle: function(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      },

      randInt: function(max) {
        return Math.floor(Math.random() * max);
      },

      warnOnExit: function(scope) {
        $window.onbeforeunload = function() {
          return 'Opravdu si přejete opustit AZKvíz? Rozehraná hra bude ztracena!';
        };

        scope.$on('$destroy', function() {
          $window.onbeforeunload = undefined;
        });
      }
    };
  });