app.controller('ReviewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('review controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;
  self.previousVisits = CardDetailFactory.previousVisitDetails;


// console.log('self.newReview', self.newReview);
  CardDetailFactory.getPlace($routeParams.placeId);
  CardDetailFactory.getReviews($routeParams.placeId);

  self.addNewReview = function() {
    console.log('clicked', self.newReview);
    self.newReview.id = $routeParams.placeId;
    CardDetailFactory.addNewReview(self.newReview);
    self.newReview = {};
    // location.reload();
    CardDetailFactory.getReviews($routeParams.placeId);
  }


// CardDetailFactory.getReviews($routeParams.placeId);


  // console.log(self.placeDetails);
}]);


// ctrl.editRecord = function(record) {
//       console.log('record is:', record);
//       CollectionService.editRecord(record).then(function() {
//         CollectionService.getRecord().then(function(records) {
//           console.log(records);
//           ctrl.recordsList = records;
//
//         });
//       });
//     }
//
//     ctrl.deleteRecord = function(id) {
//       console.log('deleting', id);
//       CollectionService.deleteRecord(id).then(function() {
//         CollectionService.getRecord().then(function(records) {
//           console.log(records);
//           ctrl.recordsList = records;
//         });
//       });
//     }
//   }
