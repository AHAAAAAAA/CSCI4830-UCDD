class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
      <div className="card">
        <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}/>
      </div>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            filters={this.props.data.filters}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
      <MyComponents.Needs actions={this.props.actions}/>
      <MyComponents.Move actions={this.props.actions}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>

    </div>

  }
}
MyComponents.App = App
