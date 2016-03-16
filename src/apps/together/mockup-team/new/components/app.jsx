class App extends React.Component {
  render(){
    //console.log(this.props)
    return (
      <div className="">
   
      <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
      <div style={{height:500}}>
      I am your main content
      </div>
   
       <footer className="page-footer light-green darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">More about us</h5>
              <p className="grey-text text-lighten-4">Polive is a realtime voting platform. We offer embedded video, live video, and/or images in order to provide users with as much information as possible.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul id="category_links"> 
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">          
          </div>
          </div>
        </footer>

      </div>
    );
      <div className="container">
        <h3><i className="some-user"></i> User: </h3>
     </div>
      );
  } 
}

MyComponents.App = App
