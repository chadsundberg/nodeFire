app.controller('ReviewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('review controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;

  CardDetailFactory.getPlace($routeParams.placeId);


  // console.log(self.placeDetails);
}]);
