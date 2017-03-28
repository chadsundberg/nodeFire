app.controller('ReviewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('review controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;
  self.newReview = CardDetailFactory.newReview;


// console.log('self.newReview', self.newReview);
  CardDetailFactory.getPlace($routeParams.placeId);

  self.addNewReview = function() {
    console.log('clicked', self.newReview);
    CardDetailFactory.addNewReview(self.newReview);
    self.newReview = {};

  }

  // console.log(self.placeDetails);
}]);
