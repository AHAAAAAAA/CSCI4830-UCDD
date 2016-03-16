class Move extends React.Component {
    render() {
        return <div id="move">
            <h2>Change your location</h2>
             <div class="row">
                <div class="input-field col s6">
                  <input onChange={this.props.actions.updateLat} placeholder="40.7" id="latitudeBox" type="text" class="validate"/>
                  <label for="latitude">Latitude</label>
                </div>
                <div class="input-field col s6">
                  <input onChange={this.props.actions.updateLon} placeholder="-73.9" id="longitudeBox" type="text" class="validate"/>
                  <label for="longitude">Longitude</label>
                </div>
              </div>
              <button onClick={this.props.actions.updateLocation} class="btn waves-effect waves-light" name="action">Submit
                <i class="material-icons right"></i>
              </button>
        </div>;
    }
}
        //else return <div id="move"><h2>Login to your location</h2></div>

MyComponents.Move = Move;