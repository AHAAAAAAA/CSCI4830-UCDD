class UserList extends React.Component {
  render(){
    var user = this.props.user;
	
    return( 
	  
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <img className="activator" height="50" src={user.imgURL}></img>{'  ' + user.username}<i className="material-icons right">more_vert</i>
          </span>
		      <li><a className="white"><b>Status:  </b>{user.status}</a></li>
		      <li><a className="white"><b>Location: </b> <br></br>Latitude: {user.pos[0]} <br></br>Longitude: {user.pos[1]}</a></li>
        </div>
	    </div>
	  </div>
	  
	)
  }
}

MyComponents.UserList = UserList
