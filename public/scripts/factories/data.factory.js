app.factory('DataFactory', ['$http', function($http) {
  console.log('data factory loaded');
  var dateList = { list: [] };
  console.log(dateList);

  getDates();

  function getDates() {
    $http({
      method: 'GET',
      url: '/ourDates'
    }).then(function(response) {
      console.log(response.data);
      dateList.list = response.data;
    });
  }


  return {
      allDates: dateList

    }

  }]);
