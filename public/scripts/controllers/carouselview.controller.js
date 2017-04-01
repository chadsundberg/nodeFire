// angular.module('ourdateApp', ['ngRoute' ,'angular-3d-carousel']);

app.controller('CarouselController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('carousel controller loaded');
  console.log($routeParams);
  var self = this;
  self.reviewList = CardDetailFactory.allReviews;

  console.log(self.reviewList);

  CardDetailFactory.getAllReviews();



  // console.log(self.placeDetails);
}]);



// app.controller('CarouselController', ['DataFactory', function(DataFactory) {
//   console.log('card table controller loaded');
//   var self = this;
//   self.dateList = DataFactory.allDates;
//   console.log(self.dateList);
// }]);
