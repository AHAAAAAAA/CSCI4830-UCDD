class NavBar extends React.Component {

  render(){
    if(this.props.data.user){
      return (
      <nav>
        <div className="nav-wrapper black">
          <div className="container">
            <a href="/apps/uber/index.html" className="brand-logo">Revolver</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/apps/uber/client/index.html"><i className="material-icons left">room</i> Map</a></li>
              <li><a href="/apps/uber/client/index.html"><i className="material-icons left">supervisor_account</i> Client</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.user.username}</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
    else{
      return (
        <nav>
          <div className="nav-wrapper black">
            <div className="container">
              <a href="/apps/uber/index.html" className="brand-logo">Revolver</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/apps/uber/client/index.html"><i className="material-icons left">room</i> Provider Map</a></li>
                <li><a href="#" onClick={this.props.actions.login}> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar
