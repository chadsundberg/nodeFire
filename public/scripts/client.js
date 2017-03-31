var app = angular.module('ourdateApp', ['angular-3d-carousel', 'ngRoute', 'firebase']);

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
  .when ('/card-table/:placeType', {
    templateUrl: '/views/card-table.html',
    controller: 'CardTableController',
    controllerAs: 'ctc'
  })
  .when ('/card-view/:placeId', {
    templateUrl: '/views/card-view.html',
    controller: 'CardViewController',
    controllerAs: 'cvc'
  })
  .when ('/review-view/:placeId', {
    templateUrl: '/views/review-view.html',
    controller: 'ReviewController',
    controllerAs: 'rc'
  })
  .when ('/carousel-view/reviews', {
    templateUrl: '/views/carousel-view.html',
    controller: 'CarouselController',
    controllerAs: 'carousel'
  })
  .otherwise ({
    redirectTo: 'login'
  })
}]);
