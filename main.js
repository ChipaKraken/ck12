if (!Object.prototype.watch) {
  Object.defineProperty(Object.prototype, "watch", {
      enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop, handler) {
      var
        oldval = this[prop]
      , newval = oldval
      , getter = function () {
        return newval;
      }
      , setter = function (val) {
        oldval = newval;
        return newval = handler.call(this, prop, oldval, val);
      }
      ;
      
      if (delete this[prop]) { // can't watch constants
        Object.defineProperty(this, prop, {
            get: getter
          , set: setter
          , enumerable: true
          , configurable: true
        });
      }
    }
  });
}
 
// object.unwatch
if (!Object.prototype.unwatch) {
  Object.defineProperty(Object.prototype, "unwatch", {
      enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop) {
      var val = this[prop];
      delete this[prop]; // remove accessors
      this[prop] = val;
    }
  });
}

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
    a.path = $location.path(); 
    // if ($location.path() === '/bar'){
    //   document.getElementsByTagName('body')[0].className = "bar_bg";
    // }
    // else if($location.path() === '  /cave'){
    //   document.getElementsByTagName('body')[0].className = "cave_bg";
    // }
    // else if($location.path() === '/rest'){
    //   document.getElementsByTagName('body')[0].className = "rest_bg";
    // }
    // else{
    //   document.getElementsByTagName('body')[0].className = "def_bg";
    // };
    a.watch('path', function (id, oldval, newval) {
      console.log( "o." + id + " changed from " + oldval + " to " + newval );
      return newval;
    })
}]);
