'use strict';

applause.directive('slide', function($document, $localStorage,$rootScope, Appdata) {

  var count = 1,

      linkFn = function(scope, element, attr) {
        scope.n = count;
        scope.isPreviewMode = Appdata.isPreviewMode;
        scope.currentSlide = $localStorage.currentSlide;

        scope.$watch(function(){
          return $localStorage.currentSlide;
        }, function(current, previous){
          scope.currentSlide = current;
        });

        Appdata.slides.push(count);
        count += 1;

        scope.missingSteps = parseInt(attr.steps);

        if(scope.n === $localStorage.currentSlide){
          $document.bind('keydown', function(keyEvent){

            console.log(scope.missingSteps);
            // Local Navigation
            if(scope.missingSteps){
              switch(keyEvent.keyCode){
                case 37:
                  scope.missingSteps += 1;
                  break;
                case 32:
                case 39:
                  scope.missingSteps -= 1;
                  break;
              }
              return;
            }

            // Triggering global event for navigation
            switch(keyEvent.keyCode) {
              case 27:
                $rootScope.$emit('slide.showGoTo', keyEvent);
                break;
              case 37:
                $rootScope.$emit('slide.prev', keyEvent);
                break;
              case 32:
              case 39:
                $rootScope.$emit('slide.next', keyEvent);
            }
          });
        }
      };

  return {
    template: '<section class="slide" ng-class="{previous: n === currentSlide-1, current: n === currentSlide, next: n === currentSlide+1, preview: isPreviewMode}" ng-transclude fit></section>',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    link: linkFn
  };
});
