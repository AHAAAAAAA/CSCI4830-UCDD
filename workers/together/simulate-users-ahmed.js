var _ = require('lodash');
var Firebase = require('firebase');
var names = ['Ahmed', 'Russell', 'Sigrunn', 'Juan', 'Tom', 'Jack', 'Somebody'];
var rooms = [];

// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  var name = names[Math.floor(Math.random()*names.length)]; 
  var room = rooms[Math.floor(Math.random()*rooms.length)];
  var duration = 1 + 5 * Math.random();
  var vote = Math.floor(Math.random()*2);
  //Timestamps
  var now = new Date();
  var time = now.getHours() + " hours " + now.getMinutes() + " minutes " + now.getSeconds() + " seconds";
  
  console.log(name);
  console.log(room);
  console.log(vote);
  console.log(time);
  
  var person = {
    name: name,
	room: room,
    vote: vote,	
	time: time
  }
  // simulate this person entering
  enter(person);
  
  //Vote a bunch before leaving
  setTimeout(function(){
    updateVote(person)
  }, 1000)
  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, 8000)
}

function enter(person){
  console.log('enter', person);
  // TODO: put this person in the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  var ref = new Firebase('https://team-polive.firebaseio.com/')
  var usersRef = ref.child("users");
  
  usersRef.child(person.name).set({
    name: person.name,
	room: person.room,
	vote: person.vote,
	lastVoted: person.time
  });

  var newTaskRef = ref.push();
  
  //Let 'em vote at entering
  updateVote(person);
}

//Let the bots vote
function updateVote(person){
  console.log('Whoah this person has an opinion!');
  var ref = new Firebase('https://team-polive.firebaseio.com/');
  var usersRef = ref.child("users");
  var voteRef = new Firebase('https://team-polive.firebaseio.com/rooms/');
  //Timestamps
  var now = new Date();
  var time = now.getHours() + " hours " + now.getMinutes() + " minutes " + now.getSeconds() + " seconds";
  
  //Snag old vote value
  var prevVote = -1
  usersRef.child(person.name).once('value', function(snapshot){
    var tmp = snapshot.val()
    prevVote = tmp.vote//get old vote before update occurs
    }, function (errorObject) {
       console.log("The read failed: " + errorObject.code);
    });
  
  //Update with new vote
  var newVote = Math.floor(Math.random()*2); 
  usersRef.child(person.name).update({
	vote: newVote
  });
  
  voteRef.child(person.room).once('value', function(snapshot){
	snapshot.forEach(function(childSnapshot) {
	 var key = childSnapshot.key();
	 var childData = childSnapshot.val();
	 
     if (prevVote==1){
	  if(key == 'yes'){
	   if(childData > 0){	
		  childData = childData - 1//update childData value before updating vote below
		  var total = childData
		  voteRef.child(person.room).update({
			yes: total
		  });
	   }
	  }
     }
	 
     if (prevVote==0){
	  if(key == 'no'){
	   if(childData > 0){		   
		   childData = childData - 1//update childData value before updating vote below
		   var total = childData
		   voteRef.child(person.room).update({
			 no: total
		   });
	   }
	  }
     }

	 //user votes yes
	 if(person.vote == 1){
	   if(key == 'yes'){
		   var total = childData + 1;
		   voteRef.child(person.room).update({
		   yes: total
		 });
	   }
	 } 
	 //user votes no
	 else{
	   if(key == 'no'){
		   var total = childData + 1;
		   voteRef.child(person.room).update({
		   no: total
		 });
	   }
	 }
	})
  
});

  //Update vote time
  usersRef.child(person.name).update({
	lastVoted: time
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

function leave(person){
  console.log('leave', person)  
  var ref = new Firebase('https://team-polive.firebaseio.com/users/' + person.name);
  ref.remove();
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

//Create rooms
createRooms();
//store rooms in array
makeRoomsAvailable();
// run each second
setInterval(simulate, 2000);
