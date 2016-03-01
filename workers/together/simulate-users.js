var _ = require('lodash')
var Firebase = require('firebase');
var names = ['Ahmed', 'Russell', 'Sigrunn', 'Juan', 'Tom', 'Jack', 'Somebody']

// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  // generate a random person with a random name,
  // random location, and random duration
  var name = names[Math.random()%names.length]
  var vote = Math.random()%2
  var person = {
    name: name,
    vote: vote
  }
  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 1000)

}

function enter(person){
  console.log('enter', person)
  // TODO: put this person in the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  var ref = new Firebase('https://team-polive.firebaseio.com/')
  ref.child(person.name).set({
    name: person.name,
  });
  ref.child(person.name.politics.vote).set({
    vote: person.vote,
  });
  var newTaskRef = ref.push()
}


function clear(){
  // TODO: remove all people from the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  // TODO: remove this person from the Firebase
  // var ref = new Firebase('your-firebase-url')
  var ref = new Firebase('https://team-polive.firebaseio.com/')
  ref.remove()
}


// clear the firebase, so that the simulation always starts from no one
clear()

// run each second
setInterval(simulate, 2000)
