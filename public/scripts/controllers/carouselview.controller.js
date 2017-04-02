app.controller('CarouselController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  // console.log('carousel controller loaded');
  // console.log($routeParams);
  var self = this;
  self.reviewList = CardDetailFactory.allReviews;
  // console.log(self.reviewList);
  CardDetailFactory.getAllReviews();
}]);
