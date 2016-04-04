// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  vote: -1, // vote of the user
  room: null, // room number user is in
  category: null, //Room title e.g. 'Sports'
  noVotes: 0, //current category vote count
  yesVotes: 0,
  username: null, //set user credentials
  status: null
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){

  //Render current room info for users -- RENDER ME FIRST SO OTHER JSX FILES SEE MY UPDATES!  
  ReactDOM.render(<MyComponents.Room data={data} actions={actions}/>,
    $('#roomNumber').get(0));

  ReactDOM.render(<MyComponents.NavBar data={data} actions={actions}/>,
    $('#nav-bar-container').get(0));
  
  console.log("logged in user is: ", data.username, " in room ", data.room)
}

//
// ACTIONS
//

var firebaseRef = new Firebase('https://team-polive.firebaseio.com');

/*//Tom's persistent login example
var authData = firebaseRef.getAuth();

if (authData) {
  console.log("User " + authData.uid + " is logged in with " + authData.provider + " OK");
} else {
  console.log("User is logged out");
}
*/
// Votes
actions.setUserLocation = function(latlng){

  if (data.user){
    firebaseRef
      .child('users')
      .child(data.user.username)
      .set(vote)
  }
}

actions.addVote = function(){
  console.log('i want to change data')
}

//Set user room
actions.setUserRoom = function(){
  //if user logged in, set their room number
  if (data.status){
    var userRef = firebaseRef
      .child('users')
      .child(data.username)
	  
	  userRef.child('room').set(data.room)
  }
}

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
        vote: data.vote,  // user vote
        imgURL: authData.github.profileImageURL,
        room: data.room //todo: needs to be changed to be the room that they are in.
      }
      
      var userRef = firebaseRef.child('users').child(user.username)

      // subscribe to the user data
      userRef.on('value', function(snapshot){
        console.log("user Changed");
        data.user = snapshot.val()
        render()
      })
	  
	  //Save a more persistent copy of login credentials
	  // Store
	  localStorage.setItem("status", user.status);
	  localStorage.setItem("username", user.username);
	  // Retrieve
	  console.log( "User creds: ",localStorage.getItem("status"), " ", localStorage.getItem("username"));
	  
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
    var userRef2 = firebaseRef
      .child('users')
      .child(data.user.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')	
	userRef2.child('room').set('None')

    data.user = null
    
	//Remove user creds from localstorage
	localStorage.removeItem("status");
	localStorage.removeItem("username");
	data.username = null;
	data.status = null;
	
    render()
  }
  
  //If old user creds were not carried over then call this logout stuff
  if (!data.user && data.status){
    console.log("Logout");
	
    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.username)
    var userRef2 = firebaseRef
      .child('users')
      .child(data.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')
	
	userRef2.child('room').set('None')
    
	//Remove user creds from localstorage
	localStorage.removeItem("status");
	localStorage.removeItem("username");
	data.username = null;
	data.status = null;
	
    render()
  }
}

render();