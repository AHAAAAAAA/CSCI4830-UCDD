MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card small grey lighten-2 col l4">
        <h4> {this.props.city.name.toUpperCase()}</h4>
          <h5>{this.props.city.hourly.summary}</h5>
            <h5 className ="ci">Current Info</h5>
            <ul>
              <li><h6><b>Temperature:</b> {this.props.city.currently.temperature} deg</h6></li>
              <li><h6><b>Wind:</b> {this.props.city.currently.windSpeed} mph</h6></li>
              <li><h6><b>Precip Probability:</b> {this.props.city.currently.precipProbability}%</h6></li>
              <li><h6><b>Humidity:</b> {this.props.city.currently.humidity}%</h6></li>
            </ul>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="row left">
        {cityElements}
      </div>
    );
  }
});
