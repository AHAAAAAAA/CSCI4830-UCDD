var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

// San Francisco
var city_location = {
  lat: 37.78,
  lon: -122.41
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name()
  var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var person = {
    name: name,
    duration: duration,
    lat: lat,
    lon: lon
  }

  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 2500)

}

function enter(person){
  console.log('enter', person)
  // TODO: put this person in the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  var ref = new Firebase('https://trumplove.firebaseio.com/')
  var customerListRef = ref.child('customers/')
  // TODO: add more fields to taskObject
  var custObject = {
    customer: person
  }

  var newCustomer = customerListRef.push()
  newCustomer.set(custObject)
}

function leave(person){
  console.log('leave', person)
  // TODO: remove this person from the Firebase
  // var ref = new Firebase('your-firebase-url')
  var ref = new Firebase('https://trumplove.firebaseio.com/')
  var customerListRef = ref.child('customers/')
  customerListRef.orderByValue().on('value', function(customers) {
    customers.forEach(function(customers) {
      var customer = customers.val()
      if(customer == person){
        var customerKey = customer.key()
      }
      customerListRef.remove(customerKey)
    })
  })
}


function clear(){
  // TODO: remove all people from the Firebase
  // var ref = new Firebase('your-firebase-url')
  // ...
  // TODO: remove this person from the Firebase
  // var ref = new Firebase('your-firebase-url')
  var ref = new Firebase('https://trumplove.firebaseio.com/')
  var customerListRef = ref.child('customers/')
  customerListRef.remove()
}


// clear the firebase, so that the simulation always starts from no one
clear()

// run each second
setInterval(simulate, 2000)
