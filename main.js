angular.module('app', ['ui.router']).config([
  '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main.html'
    }).state('gallery', {
      url: '/gallery',
      templateUrl: 'gallery.html'
    }).state('bar', {
      url: '/bar',
      templateUrl: 'main-bar.html'
    }).state('cave', {
      url: '/cave',
      templateUrl: 'main-cave.html'
    }).state('rest', {
      url: '/rest',
      templateUrl: 'main-rest.html'
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
