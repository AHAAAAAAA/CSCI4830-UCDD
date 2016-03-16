class App extends React.Component {
  render(){
    var userElements = this.props.data.users.map(function(u,i){
      return <MyComponents.UserList user={u} key={i}/>
    })
    var providerElements = this.props.data.providers.map(function(p,j){
      return <MyComponents.ProviderList provider={p} key={j} id={p.key}/>
    })
    
    return <div className="container">
      <h3><i className="fa fa-location-arrow"></i> Client and User Map: </h3>
		  <MyComponents.UserMap 
			users={this.props.data.users}
			providers={this.props.data.providers}
			provider={this.props.data.provider}
			center={this.props.data.center}
			user={this.props.data.user}
			setUserLocationAction={this.props.actions.setUserLocation}/>			

		  <h3><i className="medium material-icons">person_pin</i> Users List:</h3>
		  <hr></hr>
		  <div className="row">
			{userElements}
		  </div>

		  <h3><i className="fa fa-truck"></i> Providers List: </h3>
		  <hr></hr>
		  <div className="row">
			{providerElements}
		  </div> 
    </div>
  }
}

MyComponents.App = App
