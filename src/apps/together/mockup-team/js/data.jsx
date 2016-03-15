actions.login = function(){

 firebaseRef.authWithOAuthPopup("github", function(error, authData){

   // handle the result of the authentication
   if (error) {
     console.log("Login Failed!", error);
   } else {
     console.log("Authenticated successfully with payload:", authData);

     // create a user object based on authData
     var user = {
       displayName: authData.github.displayName,
       username: authData.github.username,
       id: authData.github.id,
       status: 'online',
       pos: data.center,  // position, default to the map center
       imgURL: authData.github.profileImageURL
     }
     
     var userRef = firebaseRef.child('users').child(user.username)

     // subscribe to the user data
     userRef.on('value', function(snapshot){
       console.log("user Changed");
       data.user = snapshot.val()
       render()
     })
     
     // set the user data
     userRef.set(user)

   }
 })

}

actions.logout = function(){


 if (data.user){
   console.log("Logout");
   firebaseRef.unauth()

   var userRef = firebaseRef
     .child('users')
     .child(data.user.username)

   // unsubscribe to the user data
   userRef.off()

   // set the user's status to offline
   userRef.child('status').set('offline')

   data.user = null

   render()

 }

}