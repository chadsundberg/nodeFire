app.controller('CardTableController', ['$routeParams','DataFactory',
function($routeParams, DataFactory) {
  // console.log('card table controller loaded');
  // console.log('These are the route params:', $routeParams);
  var self = this;
  DataFactory.getDates($routeParams.placeType);
  self.dateList = DataFactory.allDates;
  // console.log(self.dateList);
  // console.log(self.placeType);
}]);
