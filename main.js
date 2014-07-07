angular.module('app', ['ui.router']).config([
  '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main.html'
    }).state('gallery', {
      url: '/gallery',
      templateUrl: 'gallery.html'
    })
  }
]).controller('mainContr', [
  '$scope', function($scope) {
    $scope.chipa = function() {
      return "chipa";
    };
  }
]).controller("headerController", ['$scope', '$location',function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
}]);
