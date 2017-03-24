var app = angular.module('ourdateApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider) {
  console.log('route provider loaeded');
  //routes
  $routeProvider
  .when ('/login', {
    templateUrl: '/views/templates/main.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .when ('/home-view', {
    templateUrl: '/views/home-view.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  .when ('/card-table', {
    templateUrl: '/views/card-table.html',
    controller: 'CardTableController',
    controllerAs: 'ctc'
  })
  .when ('/card-view', {
    templateUrl: '/views/card-view.html',
    controller: 'CardViewController',
    controllerAs: 'cvc'
  })
  .when ('/carousel-view', {
    templateUrl: '/views/carousel-view.html',
    controller: 'CarouselController',
    controllerAs: 'carousel'
  })
  .otherwise ({
    redirectTo: 'login'
  })
}]);
