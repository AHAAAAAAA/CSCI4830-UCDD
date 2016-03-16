class NavBar extends React.Component {

  render(){
    if(this.props.data.user){
      return (
      <nav>
        <div className="nav-wrapper light-green darken-3">
          <div className="container">
            <a href="/apps/uber/index.html" className="brand-logo">Polive</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/apps/together/mockup-team/new/index.html">Home</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.user.username}</a></li>
              <li><a className="dropdown-button white-text" href="#!" data-activates="categories_dropdown">Categories<i className="material-icons right">arrow_drop_down</i></a></li>
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
          <div className="nav-wrapper light-green darken-3">
            <div className="container">
              <a href="/apps/uber/index.html" className="brand-logo">Polive</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/apps/together/mockup-team/new/index.html">Home</a></li>
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