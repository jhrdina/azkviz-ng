'use strict';

angular.module('azkvizApp')
  .directive('hexTimer', function() {
    return {
      templateUrl: 'core/question/hexTimer/hexTimer.html',
      restrict: 'E',
      scope: {
        seconds: '@',
        active: '@',
        onFinish: '&'
      },
      link: function(scope, element, attrs) {

        scope.seconds = scope.seconds ? scope.seconds : 10;

        var el = element[0].getElementsByClassName('pie')[0],
          α = 0,
          π = Math.PI,
          t = 30,
          step = t * 360 / (scope.seconds * 1000);

        attrs.$observe('active', function(value) {
          if (value !== 'true') {
            α = 0;
          }

          function draw(angle) {
            var anim;
            if (angle != 360) {
              var r = (angle * π / 180),
                x = Math.sin(r) * 29.44,
                y = Math.cos(r) * -29.44,
                mid = (angle > 180) ? 1 : 0,
                anim = 'M 0 0 v -29.44 A 29.44 29.44 1 ' + mid + ' 1 ' + x + ' ' + y + '';
            } else {
              anim = 'M 0 -29.44 a 29.44 29.44 0 1 1 0 58.88 a 29.44 29.44 0 1 1 0 -58.88';
            }

            el.setAttribute('d', anim);
          }

          var id = setInterval(function() {
            α += step;

            if (attrs.active !== "true") {
              clearInterval(id);
              draw(0);

            } else if (α > 360) {
              clearInterval(id);
              draw(360);
            } else {
              draw(α);
            }
          }, 30);
        });
      },
      controller: function($scope, $timeout, $interval) {

        var stopText,
          stopCallback;

        $scope.$watch('active', function(value) {

          if (value != "true") {
            $interval.cancel(stopText);
            $timeout.cancel(stopCallback);
            $scope.secsLeft = $scope.seconds;
            return;
          }

          stopText = $interval(function() {
            $scope.secsLeft -= 1;
          }, 1000, $scope.seconds);

          stopCallback = $timeout($scope.onFinish, $scope.seconds * 1000);
        });
      }
    };
  });