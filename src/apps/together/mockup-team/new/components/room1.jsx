class Room extends React.Component { 
  render(){
    var roomtitle = new Firebase('https://team-polive.firebaseio.com/rooms/Room1');
	var roomusers = new Firebase('https://team-polive.firebaseio.com/users');
	var titleRoom = {category: 'None'};
	var user = [];
	var tempUser = '';
	var votes = {no: 0, yes: 0};
	
	//Initialize the user array
	user.push(tempUser);
	
    //Set data.room to current room
    this.props.data.room = 'Room1'
	console.log('Room1 set!')
	
	//Set data.category to current room category
	roomtitle.once('value', function(data) {
	var roomData = data.val();
	  titleRoom.category = roomData.name;
      //clear old category title	  
      document.getElementById("categoryTitle").innerHTML = "";	  
	  $('#categoryTitle').append('<h1 class="black-text center">'+titleRoom.category+'</h1>');
    });
	
	//Set users in the current room
	roomusers.orderByChild("room").equalTo("Room1").on('value', function(data){
	  data.forEach(function(users) {
	    var userdb = users.child("username").val();		  
	    tempUser = userdb;
	    user.push(tempUser);			 
	  })
	  
	  for (var i = 0; i < user.length; i++) {
		  console.log("user is: ", user[i]);
	  }
	  
      //Clear card content before loading in users
      document.getElementById("name").innerHTML = "";
	  //Display all users in array
	  for (var i = 0; i < user.length; i++) {
          $('#name').append('<li class="collection-item">' +user[i]+ '</li>'); 
	  }

	  //After pushing clear the old array
	  user = [];
    });
	
	//Now update the votes for the room whenever a user enters this room
    this.props.actions.setRoomDataVotes();
	
    return (
	    null
    );
  }
}
MyComponents.Room = Room

