app.factory('CardDetailFactory', ['$firebaseAuth', '$http', function($firebaseAuth, $http) {
  console.log('card detail factory loaded');
  var placeDetails = { list: [] };
  var reviewDetails = { list: {} };
  var previousVisits = { list: {} };
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
            reviewDetails.list = response.data;
          });
        });
      } else {
        console.log('Not logged in or not authorized.');
        self.secretData = "Log in to search for date activities.";
      }
  }

//   $('#taskList').on('click', '.completeButton', function(){
//     var idOfTaskToComplete = $(this).parent().parent().data().id;
//     console.log('the id of task to complete is ', idOfTaskToComplete);
//     $.ajax({
//       type: 'PUT',
//       url: '/tasks/update/' + idOfTaskToComplete,
//       success: function(response){
//         console.log(response);
//         getTaskData();
//       }
//     })
//   });
//
//
//   $('#taskList').on('click', '.deleteButton', function(){
//     var idOfTaskToDelete = $(this).parent().parent().data().id;
//     console.log(idOfTaskToDelete);
//     swal({
//       title: 'Are you sure you want to delete?',
//       text: "Do you really want to delete this task?",
//       type: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!'
//     }).then(function() {
//       swal(
//         'Deleted!',
//         'Your task has been deleted.',
//         'success'
//       )
//       deleteTask(idOfTaskToDelete);
//       $('#taskList').empty();
//       getTaskData();
//     })
//
//   });
//
// });
//
// function deleteTask(id) {
// $.ajax({
//   type: 'DELETE',
//   url: '/tasks/delete/' + id,
//   success: function(response) {
//     console.log(response);
//   }
// })
//
// }

  return {
    allDetails: placeDetails,
    getPlace: getPlace,
    addNewReview: addNewReview,
    newReview: reviewDetails,
    getReviews: getReviews,
    previousVisitDetails: previousVisits
  }

  }]);
