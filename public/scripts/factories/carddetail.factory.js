app.factory('CardDetailFactory', ['$firebaseAuth', '$http','$routeParams', function($firebaseAuth, $http, $routeParams) {
  console.log('card detail factory loaded');
  var placeDetails = { list: [] };
  var reviewDetails = { list: {} };
  var previousVisits = { list: {} };
  // var reviewUpdateDetails = { list: {} };
  // var reviewToDelete = { list: {} };
  var auth = $firebaseAuth();
  console.log(placeDetails);

  function getPlace(placeId) {
    console.log('factory getting place:', placeId);
    // var firebaseUser = auth.$getAuth();
    auth.$onAuthStateChanged(function(firebaseUser){
      // firebaseUser will be null if not logged in
      if(firebaseUser) {
        // This is where we make our call to our server
        firebaseUser.getToken().then(function(idToken){
          $http({
            method: 'GET',
            url: '/cardDetail',
            headers: {
              id_token: idToken
            },
            params: {placeId: placeId}
          }).then(function(response) {
            console.log(response.data);
            placeDetails.list = response.data;
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to search for date activities.";
      }
    });
  }

  function getReviews(placeId) {
    console.log('factory getting place:', placeId);
    // var firebaseUser = auth.$getAuth();
    auth.$onAuthStateChanged(function(firebaseUser){
      // firebaseUser will be null if not logged in
      if(firebaseUser) {
        // This is where we make our call to our server
        firebaseUser.getToken().then(function(idToken){
          $http({
            method: 'GET',
            url: '/cardDetail/reviews',
            headers: {
              id_token: idToken
            },
            params: {placeId: placeId}
          }).then(function(response) {
            console.log(response.data);
            previousVisits.list = response.data;
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to search for date activities.";
      }
    });
  }

  function addNewReview(newReview) {
    console.log('factory getting place:', newReview);
    var firebaseUser = auth.$getAuth();
    // auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      firebaseUser.getToken().then(function(idToken){
        $http({
          method: 'POST',
          url: '/cardDetail',
          headers: {
            id_token: idToken
          },
          data: newReview
        }).then(function(response) {
          console.log(response.data);
          getReviews($routeParams.placeId);
        });
      });
    } else {
      console.log('Not logged in or not authorized.');
      self.secretData = "Log in to search for date activities.";
    }
  }

  function editReview(review) {
    console.log('factory getting place:', review);
    var firebaseUser = auth.$getAuth();
    // auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      firebaseUser.getToken().then(function(idToken){
        $http({
          method: 'PUT',
          url: '/cardDetail/reviews/' + review.id,
          headers: {
            id_token: idToken
          },
          data: review
        }).then(function(response) {
          console.log(response.data);
          getReviews($routeParams.placeId);
          // reviewUpdateDetails.list = response.data;
        });
      });
    } else {
      console.log('Not logged in or not authorized.');
      self.secretData = "Log in to search for date activities.";
    }
  }

  function deleteReview(review) {
    console.log('factory getting place:', review);
    // var firebaseUser = auth.$getAuth();
  var firebaseUser = auth.$getAuth();
      // firebaseUser will be null if not logged in
      if(firebaseUser) {
        // This is where we make our call to our server
        firebaseUser.getToken().then(function(idToken){
          $http({
            method: 'DELETE',
            url: '/cardDetail/reviews/' + review.id,
            headers: {
              id_token: idToken
            },
            params: {review: review}
          }).then(function(response) {
            // console.log(response.data);
            getReviews($routeParams.placeId);
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to search for date activities.";
      }
    }



  return {
    allDetails: placeDetails,
    getPlace: getPlace,
    addNewReview: addNewReview,
    newReview: reviewDetails,
    getReviews: getReviews,
    previousVisitDetails: previousVisits,
    // reviewToDelete: reviewToDelete,
    editReview: editReview,
    deleteReview: deleteReview
  }

}]);
