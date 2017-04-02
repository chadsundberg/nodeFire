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
    swal({
title: 'Thanks for posting a new review!',
text: 'Your review is now in the Date Carousel',
confirmButtonText: 'Ok'
});
  }

  self.editReview = function(review) {
        CardDetailFactory.editReview(review);
        console.log(review);
        swal({
    title: 'Success!',
    text: 'Your changes have been saved.',
    confirmButtonText: 'Ok'
    });
      }

  self.deleteReview = function(review) {
        CardDetailFactory.deleteReview(review);
        console.log(review);
        swal({
    title: 'Success!',
    text: 'Your review has been deleted.',
    confirmButtonText: 'Ok'
    });

          }

}]);
