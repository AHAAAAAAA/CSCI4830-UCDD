const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class UserMap extends React.Component {
  render(){
    const clients = this.props.users
    var client_icon = L.icon({
      iconUrl: 'img/client_icon.png',
      iconSize: [40, 40],
      iconAnchor: [0, 40],
      popupAnchor: [-3, -76]
    })
    const userElements = _.map(clients, function(u,i){

      var pos = [u.pos[0], u.pos[1]];
      return <Marker position={pos} key={i} icon={client_icon}>
        <Popup>
          <span>{u.username}</span>
        </Popup>
      </Marker>
    })

    const providers = this.props.providers
    //console.log('providers: ', providersNames)
    var provider_icon = L.icon({
      iconUrl: 'img/provider_icon.png',
      iconSize: [40, 40],
      iconAnchor: [0, 40],
      popupAnchor: [-3, -76]
    })
    const providerElements = _.map(providers, function(p,j){
      
      var pos = [p.lat, p.lon];

      return <Marker position={pos} key={j} icon={provider_icon}>
        <Popup>
          <span><b>{p.name}</b><br></br>{p.restaurant}</span>
        </Popup>
      </Marker>
    })

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    return  <Map center={this.props.center}
          zoom={13}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {userElements}
        {providerElements}
      </Map>
  }
  
  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.UserMap = UserMap
