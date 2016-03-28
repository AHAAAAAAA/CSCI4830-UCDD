class Users extends React.Component { 
  render(){
    //Clear card content before loading in users
    document.getElementById("name").innerHTML = "";
	//Display all users in array
	for (var i = 0; i < this.props.users.length; i++) {
        $('#name').append('<li class="collection-item">' +this.props.users[i]+ '</li>'); 
	}
    return (
        null
    );
  }
}
MyComponents.Users = Users

