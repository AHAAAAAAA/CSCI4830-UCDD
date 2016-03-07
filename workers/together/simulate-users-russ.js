var _ = require('lodash');
var Firebase = require('firebase');
var names = ['Ahmed', 'Russell', 'Sigrunn', 'Juan', 'Tom', 'Jack', 'Somebody'];
var rooms = ['Sports', 'Political', 'Other'];

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
  // read data from the location Contact once
  voteRef.child(person.room).once('value', function(snapshot){
	snapshot.forEach(function(childSnapshot) {
	 var key = childSnapshot.key();
	 var childData = childSnapshot.val();
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
  roomRef.child("Sports").set({
    yes: 0,
	no: 0
  });
  roomRef.child("Political").set({
    yes: 0,
	no: 0
  });
  roomRef.child("Other").set({
    yes: 0,
	no: 0
  });
  
  var newTaskRef = ref.push();
  
  console.log('Rooms created captain!');
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
// run each second
setInterval(simulate, 2000);
