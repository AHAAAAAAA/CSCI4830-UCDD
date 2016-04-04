class Room extends React.Component { 
  render(){
    var roomtitle = new Firebase('https://team-polive.firebaseio.com/rooms/Room1');
	var titleRoom = {category: 'None'};
	
    //Set data.room to current room
    this.props.data.room = 'Room1'
	console.log('Room1 set!')
	
	//If user logged in, make call to firebase to update their room
	if(this.props.data.user){
	    console.log('Changing rooms!')
		//TODO: call this.props.actions.setUserRoom() once persistent logins works
	}
	
	//Set data.category to current room category
	roomtitle.once('value', function(data) {
	var roomData = data.val();
	  titleRoom.category = roomData.name;		
	  $('#categoryTitle').append('<h1 class="black-text center">'+titleRoom.category+'</h1>');
    });
	
    return (
	    null
    );
  }
}
MyComponents.Room = Room

