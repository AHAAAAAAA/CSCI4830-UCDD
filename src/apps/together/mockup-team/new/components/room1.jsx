class Room extends React.Component { 
  render(){
    this.props.data.room = 'Room1'
	console.log('Room1 set!')
    return (
	    null
    );
  }
}
MyComponents.Room = Room

