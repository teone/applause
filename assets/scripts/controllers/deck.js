'use strict';

applause.controller('DeckCtrl', function($scope, Appdata, $localStorage, $location) {


  $scope.isProgressBarVisible = Appdata.progressBar;
  $scope.isSlideCountVisible = Appdata.slideCount;

  $scope.$storage = $localStorage.$default({currentSlide: 1});

  $scope.$watch(function() {
    return Appdata;
  }, function (app) {
    $scope.lastSlide = app.data.slides.length;
    $scope.slideList = app.data.slides;
  }, true);

  $scope.next = function(){

    if($scope.slideList[$scope.$storage.currentSlide - 1].steps > 0){
      Appdata.setSteps($scope.$storage.currentSlide - 1, $scope.slideList[$scope.$storage.currentSlide - 1].steps -= 1);
      return;
    }
    if($scope.$storage.currentSlide < $scope.lastSlide) {
      $scope.$storage.currentSlide = $scope.$storage.currentSlide += 1;
      $location.path($scope.$storage.currentSlide);
    }
  };

  $scope.prev = function(){
    if($scope.$storage.currentSlide > 1) {
      $scope.$storage.currentSlide = $scope.$storage.currentSlide -= 1;
      $location.path($scope.$storage.currentSlide);
    }
  };

  $scope.$parent.keyup = function(keyEvent) {
    console.log(keyEvent.keyCode);
    switch(keyEvent.keyCode) {
      case 27:
        $scope.showGoTo = !$scope.showGoTo;
        break;
      case 37:
      case 33:
        $scope.prev();
        break;
      case 32:
      case 39:
      case 34:
        $scope.next();
    }
    $location.path($scope.$storage.currentSlide);
  };

});
