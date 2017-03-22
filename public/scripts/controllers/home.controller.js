app.controller('HomeController', ['DataFactory', function(DataFactory) {
  var self = this;
  self.dateList = DataFactory.allDates;


  }]);
