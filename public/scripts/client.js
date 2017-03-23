var app = angular.module('ourdateApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider) {
  console.log('route provider loaeded');
  //routes
  $routeProvider
  .when ('/home', {
    templateUrl: '/views/home-view.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  // .when ('/card-table', {
  //   templateUrl: '/views/card-table.html',
  //   controller: 'CardTableController',
  //   controllerAs: 'ctc'
  // })
  // .when ('/card-view', {
  //   templateUrl: '/views/card-view.html',
  //   controller: 'CardViewController',
  //   controllerAs: 'cvc'
  // })
  // .when ('/carousel-view', {
  //   templateUrl: '/views/carousel-view.html',
  //   controller: 'CarouselController',
  //   controllerAs: 'cc'
  // })
  .otherwise ({
    redirectTo: 'home'
  })
}]);
