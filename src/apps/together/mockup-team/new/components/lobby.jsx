class Room extends React.Component { 
  render(){
    this.props.data.room = 'Lobby'
    console.log('user currently in the lobby!')
    return (
	    null
    );
  }
}
MyComponents.Room = Room

