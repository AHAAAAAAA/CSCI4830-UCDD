var _ = require('lodash');
var Firebase = require('firebase');
var names = ['Ahmed', 'Sigrunn', 'Russ', 'Juan', 'Tom', 'Alberto', 'Jesse'];
var rooms = [];
var SYNC = 4000;


// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  var name = names[Math.floor(Math.random()*names.length)]; 
  var room = rooms[Math.floor(Math.random()*rooms.length)];
  var duration = 1 + 5 * Math.random();
  //Timestamps
  var now = new Date();
  var time = now.getHours() + " hours " + now.getMinutes() + " minutes " + now.getSeconds() + " seconds";
  
  console.log(name);
  console.log(room);
  console.log(time);
  
  //Grab a random person -- if user already logged in they are just changing rooms :)
  var person = {
    name: name,
	room: room,	
	time: time,
	status: 'online'
  }
 
  // simulate this person entering
  enter(person);
  
  //Vote before leaving -- must be synced with leave timeout otherwise numbers get off
  var userVoting = setInterval(function(){
    updateVote(person)
  }, SYNC)
  // simulate this person leaving after 'duration' seconds (logout before simulate gets called again)
  setTimeout(function(){
    leave(person, userVoting)
  }, SYNC)
}

//Add all users to firebase initially -- logged off in no rooms etc.
function addUsers(){
	var ref = new Firebase('https://team-polive.firebaseio.com/')
    var usersRef = ref.child("users");
	
	console.log('Adding random user bots to firebase');
	
	for(i = 0; i < names.length; i++){
	  usersRef.child(names[i]).set({
		username: names[i],
		room: 'None',
		vote: -1,
		lastVoted: '',
		status: 'offline'
      });
	}
}

function enter(person){
  //console.log('enter', person);
  console.log('entering');
  // TODO: put this person in the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  var ref = new Firebase('https://team-polive.firebaseio.com/')
  var voteRef = new Firebase('https://team-polive.firebaseio.com/rooms/' + person.room +"/");
  var usersRef = ref.child("users");
  
  //Delete this users existing vote from current room-- it may not be relevant anymore
  usersRef.child(person.name).once('value', function(snapshot){
    var tmp = snapshot.val()
    prevVote = tmp.vote//get old vote before update occurs
	oldRoom = tmp.room;

	if(prevVote == 1){
		voteRef.child("yes").once('value', function(snapshot){
		  val = snapshot.val();
		  if(val > 0){
			  val = val - 1;
			  voteRef.update({
				yes: val
			  });
		  }
	    });
	}
	if(prevVote == 0){
		voteRef.child("no").once('value', function(snapshot){
		  val = snapshot.val();
		  if(val > 0){
			  val = val - 1;
			  voteRef.update({
				no: val
			  });
		  }
	    });
	}
	
	//update new data for the entered user
    usersRef.child(person.name).update({
	  room: person.room,
	  lastVoted: person.time,
	  status: person.status
    });
  });

  var newTaskRef = ref.push();//MIGHT NEED TO KEEP THINGs CURRENT
}

//Let the bots vote
function updateVote(person){
  console.log('Whoah this person has an opinion!');
  var ref = new Firebase('https://team-polive.firebaseio.com/');
  var usersRef = ref.child("users");
  var voteRef = new Firebase('https://team-polive.firebaseio.com/rooms/' + person.room +"/");
  //Timestamps
  var now = new Date();
  var time = now.getHours() + " hours " + now.getMinutes() + " minutes " + now.getSeconds() + " seconds";
  //Snag old vote value
  var prevVote = -1;
  var newVote = Math.floor(Math.random()*2); 
  
  usersRef.child(person.name).once('value', function(snapshot){
    var tmp = snapshot.val()
    prevVote = tmp.vote//get old vote before update occurs
      //Update with new vote in firebase
      usersRef.child(person.name).update({
	    vote: newVote,
		lastVoted: time //update vote time
      });
	  console.log("calling updates " + newVote + " " + prevVote);
	  //Update votes:
	  //user votes yes
	  if((newVote == 1 && prevVote == 0) || (newVote == 1 && prevVote == -1)){
		  //Delete old vote
		  if(prevVote == 0){
			  voteRef.child("no").once('value', function(snapshot){
				  val = snapshot.val();
				  if(val > 0){
					  val = val - 1;
					  voteRef.update({
						no: val
					  });
				  }
			  });
	      }
		  
		  voteRef.child("yes").once('value', function(snapshot){
			  val = snapshot.val() + 1;
			  voteRef.update({
			    yes: val
			  });
		  });
	  }
	  //user votes no
	  else if ((newVote == 0 && prevVote == 1) || (newVote == 0 && prevVote == -1)){
		  //Delete old vote
		  if(prevVote == 1){
			  voteRef.child("yes").once('value', function(snapshot){
				  val = snapshot.val();
				  if(val > 0){
					  val = val - 1;
					  voteRef.update({
						yes: val
					  });
				  }
			  });
	      }
		  
		  voteRef.child("no").once('value', function(snapshot){
			  val = snapshot.val() + 1;
			  console.log("value: " + val)
			  voteRef.update({
			    no: val
			  });
		  });
	  }
    }, function (errorObject) {
       console.log("The read failed: " + errorObject.code);
    });
  
  var newTaskRef = ref.push();
  console.log('Opinion added!');
}

//This function creates available rooms for votin'
function createRooms(){
  console.log('Creating debate rooms: Fire ze missles!');
  var ref = new Firebase('https://team-polive.firebaseio.com/');
  
  var roomRef = ref.child("rooms");
  roomRef.child("Room1").set({
    yes: 0,
	no: 0,
	available: 0,
	name: 'Sports',
	video: 'https://www.youtube.com/v/QXEoffF-Yks',
	owner: 'None'
  });
 
  roomRef.child("Room2").set({
    yes: 0,
	no: 0,
	available: 0,
	name: 'Political',
	video: 'https://www.youtube.com/embed/6bqvoUMVmCs',
	owner: 'None'
  });
  roomRef.child("Room3").set({
    yes: 0,
	no: 0,
	available: 0,
	name: 'Other',
	video: 'https://www.youtube.com/v/7j3o-C7T-rM',
	owner: 'None'
  });
  //Add some blank rooms
  roomRef.child("Room4").set({
    yes: 0,
	no: 0,
	available: 1,
	name: 'None',
	video: 'None',
	owner: 'None'
  });
  roomRef.child("Room5").set({
    yes: 0,
	no: 0,
	available: 1,
	name: 'None',
	video: 'None',
	owner: 'None'
  });
  roomRef.child("Room6").set({
    yes: 0,
	no: 0,
	available: 1,
	name: 'None',
	video: 'None',
	owner: 'None'
  });
  
  var newTaskRef = ref.push();
  
  console.log('Rooms created captain!');
}

function makeRoomsAvailable(){
  console.log('Putting rooms into array');
  //pick random room from firebase instead of hard coding an array
  var roomsRef = new Firebase('https://team-polive.firebaseio.com/rooms/');
  //Only add rooms that are active i.e. NOT available, if available then no debate currently active
  roomsRef.orderByChild("available").equalTo(0).once("value", function(snapshot) {
	  snapshot.forEach(function(data) {
	  var room = data.key();
	  rooms.push(data.key());
	});
  });
}

//Just have users logoff rather than delete their data
function leave(person, userVoting){
  //Stop the voting interval when a user leaves
  clearInterval(userVoting);
  //console.log('leave', person)  
  console.log('leaving') 
  var ref = new Firebase('https://team-polive.firebaseio.com/users/' + person.name);
  ref.update({
	room: 'None',
	status: 'offline'
  });
}

function clear(){
  // TODO: remove all people from the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  // TODO: remove this person from the Firebase
  // var ref = new Firebase('your-firebase-url')
  var ref = new Firebase('https://team-polive.firebaseio.com/');
  ref.remove();
}


// clear the firebase, so that the simulation always starts from no one
clear();

//Add users
addUsers();
//Create rooms
createRooms();
//store rooms in array
makeRoomsAvailable();
// run each second
setInterval(simulate, 1000);
