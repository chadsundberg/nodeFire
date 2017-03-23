app.factory('DataFactory', ['$firebaseAuth', '$http', function($firebaseAuth, $http) {
  console.log('data factory loaded');
  var dateList = { list: [] };
  var auth = $firebaseAuth();
  console.log(dateList);

  getDates();

  function getDates() {
    auth.$onAuthStateChanged(function(firebaseUser){
      // firebaseUser will be null if not logged in
      if(firebaseUser) {
        // This is where we make our call to our server
        firebaseUser.getToken().then(function(idToken){
          $http({
            method: 'GET',
            url: '/ourDates',
            headers: {
              id_token: idToken
            }
          }).then(function(response) {
            console.log(response.data);
            dateList.list = response.data;
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to search for date activities.";
      }

    });
  }

  return {
    allDates: dateList

  }

}]);
