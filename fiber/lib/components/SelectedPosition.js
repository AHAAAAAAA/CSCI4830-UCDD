import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, Circle, CircleMarker } from 'react-leaflet'
import { NEARBY_METERS } from '../constants'

export default class SelectedPosition extends Component {

  render(){
    const { map, selectedPosition } = this.props

    if (selectedPosition){

      // TODO: create a <Circle/> using NEARBY_METERS as the radius
      const nearbyCircle = <Circle center={selectedPosition} map={map} radius={NEARBY_METERS}/>

      const marker = <CircleMarker center={selectedPosition} map={map} radius={10}/>

      // Q: What's the difference beteween CircleMarker and Circle

      return <div>
        { nearbyCircle }
        { marker }
      </div>
    } else {
      return null
    }
  }
}
