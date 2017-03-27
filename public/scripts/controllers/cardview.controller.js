app.controller('CardViewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('card view controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;

  CardDetailFactory.getPlace($routeParams.placeId);


  // console.log(self.placeDetails);
}]);
