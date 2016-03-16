class ProviderList extends React.Component {
  render(){
    var provider = this.props.provider;
    return (
	
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4"><h4>{provider.name}</h4>
          </span>
		  <li><a className="white"><b>Restaurant:  </b>{provider.restaurant}</a></li>
          <li><a className="white"><b>Duration: </b> {provider.duration} </a></li>
          <li><a className="white"><b>Location: </b><br></br> Latitude: {provider.lat} <br></br>Longitude: {provider.lon}</a></li>
        </div>
      </div>
    </div>
    )
  }
}

MyComponents.ProviderList = ProviderList
