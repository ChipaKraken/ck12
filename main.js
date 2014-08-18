ck = {
	"id": function (argument) {
		return document.getElementById(argument);
	},
	"class":function (argument) {
		return document.getElementsByClassName(argument);
	},
	"code":function (argument) {
		return window.btoa(argument)
	},
	"get":function (url) {
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	},
	"json":function (url) {
		return JSON.parse(ck.get(url))
	}
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
    }).state('about', {
      url: '/about',
      templateUrl: 'about.html'
    }).state('bar', {
      url: '/bar',
      templateUrl: 'main-bar.html'
    }).state('cave', {
      url: '/cave',
      templateUrl: 'main-cave.html'
    }).state('rest', {
      url: '/rest',
      templateUrl: 'main-rest.html'
    }).state('blog', {
      url: '/blog',
      templateUrl: 'blog.html',
      controller: 'blogContr'
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
    $scope.Fb = "";$scope.Inst = "";$scope.iconShow = false;
    $scope.location = $location;
    $scope.$watch( 'location.path()', function() {
      if ($location.path() === '/bar'){
        document.getElementsByTagName('body')[0].className = "bar_bg";
        $scope.Inst = "12_bar";
        $scope.Fb = "12.Bish";
        $scope.iconShow = true;
      }
      else if($location.path() === '/cave'){
        document.getElementsByTagName('body')[0].className = "cave_bg";
        $scope.Fb = "Cave.cavecoffee";
        $scope.Inst = "cave_coffee";
        $scope.iconShow = true;
      }
      else if($location.path() === '/rest'){
        document.getElementsByTagName('body')[0].className = "rest_bg";
        $scope.Inst = "12_restaurant";
        $scope.Fb = "TwelRestaurant";
        $scope.iconShow = true;
      }
      else{
        document.getElementsByTagName('body')[0].className = "def_bg";
        $scope.Fb = "";$scope.Inst = "";
        $scope.iconShow = false;
      };     
     });
}]).controller('blogContr', ['$scope', function($scope){
    temp_json = ck.json('http://ck12.freeiz.com/?json=1');
    $scope.posts = temp_json.posts;
}])
