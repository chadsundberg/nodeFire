app.controller('HomeController', ['DataFactory', function(DataFactory) {
  console.log('home controller loaded');
  var self = this;
  self.dateList = DataFactory.allDates;
  console.log(self.dateList);
}]);
