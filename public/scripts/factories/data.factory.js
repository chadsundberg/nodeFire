app.factory('DataFactory', ['$http', function($http) {
  var dateList = { list: [] };
  console.log(dateList);

  getDates();

  function getDates() {
    $http({
      method: 'GET',
      url: '/ourdates'
    }).then(function(response) {
      dateList.list = response.data;
    });
  }


  return {
      allDates: dateList,

    }

  }]);
