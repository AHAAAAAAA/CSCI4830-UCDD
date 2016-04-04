class NavBar extends React.Component {

  /*This function only invoked once on initial page load-- need invoked on react changes to navbar*/
  componentDidMount(){
        //Try to connect to firebase for the life of THIS window
        var roomsRef = new Firebase('https://team-polive.firebaseio.com/rooms/');
		
		//Expose props and/ or actions that are available in console
		console.log('render', this.props.actions)
		
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
	  
	  //Load active rooms reactfully 
	  //Only add rooms that are active i.e. NOT available, if available then no debate currently active
	  roomsRef.orderByChild("available").equalTo(0).on("value", function(snapshot) {
	   //clear old rooms
	   document.getElementById('categories_dropdown').innerHTML = "";
	   //Add available rooms
	   snapshot.forEach(function(data){
		 var room = data.key();
		 roomsRef.child(room).once("value", function(snapshot){
			 snapshot.forEach(function(childSnapshot) {
				 if(childSnapshot.key() == 'name'){
					 $('#categories_dropdown').append('<li><a href="/apps/together/mockup-team/new/categories/'+room+'.html" onClick="setRoomData()">'+childSnapshot.val()+'</a></li><li class="divider"></li>');
				 }
		     })

		 });
	   });
	  });
	  console.log('Mounted broh!', this.props.data.room)
  }

  /* This function invoked when navbar changes -- must have alongside componentDidMount() since is only called after initial render*/
  componentDidUpdate(){
      var roomsRef = new Firebase('https://team-polive.firebaseio.com/rooms/');
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
	  
	  //Load active rooms reactfully 
	  //Only add rooms that are active i.e. NOT available, if available then no debate currently active
	  roomsRef.orderByChild("available").equalTo(0).on("value", function(snapshot) {
	   //clear old rooms
	   document.getElementById('categories_dropdown').innerHTML = "";
	   //Add available rooms
	   snapshot.forEach(function(data){
		 var room = data.key();
		 roomsRef.child(room).once("value", function(snapshot){
			 snapshot.forEach(function(childSnapshot) {
				 if(childSnapshot.key() == 'name'){
					 $('#categories_dropdown').append('<li><a href="/apps/together/mockup-team/new/categories/'+room+'.html" >'+childSnapshot.val()+'</a></li><li class="divider"></li>');
				 }
		     })

		 });
	   });
	  });
	  
	  console.log('DidMount broh!', this.props.data.room)
  }
  
  render(){
    //console.log('render', this.props.actions)
	//console.log("rendering now")
	
	//Check if user is logged in through persistent storage -- if true then set for the page BEFORE rendering anything else
	if(localStorage.getItem("status") == 'online'){
		console.log("User is logged in! Setting user credentials... ")
		this.props.data.status = localStorage.getItem("status");
		this.props.data.username = localStorage.getItem("username");
		//Update firebase too
		console.log('Setting room in firebase')
		this.props.actions.setUserRoom();
	}
	
    if(this.props.data.status){
      return (
      <nav>
        <div className="nav-wrapper light-green darken-3">
          <div className="container">
          	<a href="/apps/together/mockup-team/new/index.html" className="brand-logo center">Polive<img src="/apps/together/mockup-team/new/images/olive.png" height="20px" style={{marginTop: 15}} /></a>
			<a href="#">{this.props.data.category}</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.username}</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
			  <li><a className="dropdown-button white-text" href="#!" data-activates="categories_dropdown">Categories<i className="material-icons right">arrow_drop_down</i></a>
				<ul id='categories_dropdown' className='dropdown-content'></ul>
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
            <a href="/apps/together/mockup-team/new/index.html" className="brand-logo center">Polive<img src="/apps/together/mockup-team/new/images/olive.png" height="20px" style={{marginTop: 15}} /></a>
			  <a href="#">{this.props.data.category}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#" onClick={this.props.actions.login}> Login</a></li>
				<li><a className="dropdown-button white-text" href="#!" data-activates="categories_dropdown">Categories<i className="material-icons right">arrow_drop_down</i></a>
				  <ul id='categories_dropdown' className='dropdown-content'></ul>
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