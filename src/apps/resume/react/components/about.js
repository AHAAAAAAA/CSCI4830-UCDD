MyComponents.About = React.createClass({

  render: function() {
    return (
      
          <div className="row">
            <div className="card">
              <div className="col s3">
              <div className="row about-me-face">
                  <img src="pp.jpg" className="circle center" width="200" height="200"/>
              </div>
            </div> 
            <div className="col s3">
              <ul>
                <li><b>Name:</b> Ahmed Almutawa</li>
                <li><b>Major:</b> CS, minor in APPM</li>
                <li><b>Year:</b> Senior</li>
                <li><a href="https://github.com/AHAAAAAAA">Github</a></li>
              </ul>
            </div>
          </div> 
          <div className="col s6"></div> 
      </div>
    );
  }

});