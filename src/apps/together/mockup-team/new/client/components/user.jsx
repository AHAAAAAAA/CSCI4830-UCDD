class User extends React.Component {
  render(){
    var user = this.props.user;
	
    if( !user){
      return(<div></div>);
    }
    return( 
	  
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <img className="activator" height="50" src={user.imgURL}></img>{'  ' + user.username}<i className="material-icons right">more_vert</i>
          </span>
          <div className="collection">
		    <li><a className="collection-item"><b>Status:  </b>{user.status}</a></li>
		    <li><a className="collection-item"><b>Latitude: {user.pos[0]}</b></a></li>
             <li><a className="collection-item"><b>Longitude: {user.pos[1]}</b></a></li>
             
          </div>
        </div>
	    </div>
	  </div>
	  
	)
  }
}

MyComponents.User = User
