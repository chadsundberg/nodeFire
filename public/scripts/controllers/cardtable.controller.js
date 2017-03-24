app.controller('CardTableController', ['$routeParams','DataFactory',
function($routeParams, DataFactory) {
  console.log('card table controller loaded');
  console.log('These are the route params:', $routeParams);
  DataFactory.getDates($routeParams.placeType);
  var self = this;
  self.dateList = DataFactory.allDates;
  console.log(self.dateList);
}]);
