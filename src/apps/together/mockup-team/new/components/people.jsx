class People extends React.Component {

  render(){
      return (
            <div className="row">
              <div className="col s6" >
                <MyComponents.User
                  user={this.props.data.user}
                  loginAction={this.props.actions.login}
                  logoutAction={this.props.actions.logout}/>
              </div>
        
              <div className="col s6">
                <MyComponents.Team
                  loginAction={this.props.actions.login}
                  logoutAction={this.props.actions.logout}/>
              </div>
            </div>
      );
  }
}
MyComponents.People = People