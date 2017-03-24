app.controller('CarouselController', ['DataFactory', function(DataFactory) {
  console.log('card table controller loaded');
  var self = this;
  self.dateList = DataFactory.allDates;
  console.log(self.dateList);
}]);
