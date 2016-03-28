import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, CircleMarker } from 'react-leaflet'
import _ from 'lodash'

export default class FiberGeometry extends Component {

  render(){

    const { map, geometry, color } = this.props

    // Q: Why do we need to do this conversion from geometry.coordinates to latLngList
    const latLngList = _.map(geometry.coordinates, (coord,i) => {
      return [coord[1], coord[0]]
    })

    // PolyLine
    // ref: http://leafletjs.com/reference.html#polyline
    return <Polyline map={map} positions={latLngList} color={color}/>
  }

}
