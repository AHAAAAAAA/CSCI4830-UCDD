class App extends React.Component {
  render(){
    console.log("User in app", this.props.data);
	   var providerElements = this.props.data.providers.map(function(p,i){
      return <MyComponents.ProviderList provider={p} key={i}/>
    })
    return (
      <div className="container">
      
    <h3><i className="fa fa-user"></i> User Info: </h3>
      <MyComponents.People 
        data={this.props.data}
        members={this.props.members}
        actions={this.props.actions}/>
      
        <h3><i className="fa fa-location-arrow"></i> Providers Map: </h3>
          <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
      
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>

          <h3><i className="fa fa-truck"></i> Providers List: </h3>
          <hr></hr>
          <div className="row">
            {providerElements}
          </div>
      </div>
      );
  } 
}

MyComponents.App = App
