class NavBar extends React.Component {
  /*This function only invoked once on initial page load-- need invoked on react changes to navbar*/
  componentDidMount(){
		//console.log($('.dropdown-button').dropdown)
		$('.dropdown-button').dropdown({
		  inDuration: 300,
		  outDuration: 225,
		  constrain_width: false, // Does not change width of dropdown to that of the activator
		  hover: true, // Activate on hover
		  gutter: 0, // Spacing from edge
		  belowOrigin: true, // Displays dropdown below the button
		  alignment: 'left' // Displays dropdown with edge aligned to the left of button
		}
	  );
  }
  
  /*This function invoked when navbar changes -- must have alongside componentDidMount()*/
  componentDidUpdate(){
		//console.log($('.dropdown-button').dropdown)
		$('.dropdown-button').dropdown({
		  inDuration: 300,
		  outDuration: 225,
		  constrain_width: false, // Does not change width of dropdown to that of the activator
		  hover: true, // Activate on hover
		  gutter: 0, // Spacing from edge
		  belowOrigin: true, // Displays dropdown below the button
		  alignment: 'left' // Displays dropdown with edge aligned to the left of button
		}
	  );
  }
  
  render(){
    if(this.props.data.user){
      return (
      <nav>
        <div className="nav-wrapper light-green darken-3">
          <div className="container">
            <a href="/apps/together/mockup-team/new/index.html" className="brand-logo">Polive</a>
			<a href="#">{this.props.data.category}</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
			  <li><a href="/apps/together/mockup-team/new/index.html">Home</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.user.username}</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
			  <li><a className="dropdown-button white-text" href="#!" data-activates="categories_dropdown">Categories<i className="material-icons right">arrow_drop_down</i></a>
				<ul id='categories_dropdown' className='dropdown-content'>
				  <li><a href="/apps/together/mockup-team/new/categories/Room1.html">Sports</a></li>
				  <li><a href="/apps/together/mockup-team/new/categories/Room2.html">Politics</a></li>
				  <li><a href="/apps/together/mockup-team/new/categories/Room3.html">Other</a></li>
				</ul>
			  </li>
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
              <a href="/apps/together/mockup-team/new/index.html" className="brand-logo">Polive</a>
			  <a href="#">{this.props.data.category}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
			    <li><a href="/apps/together/mockup-team/new/index.html">Home</a></li>
                <li><a href="#" onClick={this.props.actions.login}> Login</a></li>
				<li><a className="dropdown-button white-text" href="#!" data-activates="categories_dropdown">Categories<i className="material-icons right">arrow_drop_down</i></a>
                  <ul id='categories_dropdown' className='dropdown-content'>
                    <li><a href="/apps/together/mockup-team/new/categories/Room1.html">Sports</a></li>
                    <li><a href="/apps/together/mockup-team/new/categories/Room2.html">Politics</a></li>
                    <li><a href="/apps/together/mockup-team/new/categories/Room3.html">Other</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar