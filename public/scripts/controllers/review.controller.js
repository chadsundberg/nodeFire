app.controller('ReviewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('review controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;
  self.previousVisits = CardDetailFactory.previousVisitDetails;

  // self.reviewUpdateDetails = CardDetailFactory.reviewUpdateDetails;
  // self.reviewToDelete = CardDetailFactory.reviewToDelete;


// console.log('self.newReview', self.newReview);
  CardDetailFactory.getPlace($routeParams.placeId);
  CardDetailFactory.getReviews($routeParams.placeId);

  self.addNewReview = function() {
    console.log('clicked', self.newReview);
    self.newReview.id = $routeParams.placeId;
    CardDetailFactory.addNewReview(self.newReview);
    self.newReview = {};
  }

  self.editReview = function(review) {
        CardDetailFactory.editReview(review);
        console.log(review);
      }

  self.deleteReview = function(review) {
        CardDetailFactory.deleteReview(review);
        console.log(review);
          }

}]);
