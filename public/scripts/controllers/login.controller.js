app.controller("LoginController", ["$location", "$firebaseAuth", "$http", function($location, $firebaseAuth, $http) {
  var auth = $firebaseAuth();
  var self = this;
  console.log('login controller running');
  // This code runs whenever the user logs in
  self.logIn = function(){
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
      self.username = firebaseUser.user.displayName;
      self.image = firebaseUser.user.photoURL;
      $location.path('/home-view');
      swal({
title: 'congrats!',
text: 'you logged in',
confirmButtonText: 'Cool'
})
    }).catch(function(error) {
      console.log("Authentication failed: ", error);

    });
  };

  // This code runs whenever the user changes authentication states
  // e.g. whevenever the user logs in or logs out
  // this is where we put most of our logic so that we don't duplicate
  // the same things in the login and the logout code
  auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      self.userIsLoggedIn = true;
      // console.log(firebaseUser);
      self.username = firebaseUser.displayName;
      self.image = firebaseUser.photoURL;
      firebaseUser.getToken().then(function(idToken){
        $http({
          method: 'GET',
          url: '/privateData',
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          self.secretData = response.data;

          // $location.path('/datesearch');
        });
      });
    } else {
      console.log('Not logged in or not authorized.');
      self.secretData = "Log in to search for date activities.";
      self.userIsLoggedIn = false;
      
    }

  });

  // This code runs when the user logs out
  self.logOut = function(){
    auth.$signOut().then(function(){
      console.log('Logging the user out!');
      self.username = '';
      self.image = '';
      $location.path('/login');
      swal({
title: 'Thanks for using Ourdate',
text: 'you logged out',
confirmButtonText: 'Peace'
})
    });
  };
}]);
