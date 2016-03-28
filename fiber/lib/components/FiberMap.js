import React, {Component, PropTypes} from 'react'

import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, Circle } from 'react-leaflet'

import _ from 'lodash'

import FiberLayerGroup from './FiberLayerGroup'
import SelectedPosition from './SelectedPosition'

// React component for adding our own content to the map
class FiberMapContent extends Component {

  render(){

    // Q: How did `fibers` get passed in as a property?
    // Q: How did `selectedPosition` get passed in as a property?
    const { map, fibers, selectedPosition } = this.props

    return <div>
      <FiberLayerGroup fibers={fibers} selectedPosition={selectedPosition} map={map}/>
      <SelectedPosition selectedPosition={selectedPosition} map={map}/>
    </div>
  }
}

// React component for visualizing fiber locations on a map
export default class FiberMap extends Component {

  render(){

    // Q: How did `setSelectedPosition` get passed in as a property?
    const { setSelectedPosition } = this.props

    // Q: What does the expression (foo) => { ... } mean?
    const leafletClickHandler = (event) => {
      // Q: What are the fields available in `event`
      // console.log('leaflet click event', event)
      setSelectedPosition(event.latlng)
    }

    return  <Map center={this.props.center}
            onLeafletClick={leafletClickHandler}
            zoom={13}
            style={{height:800, width:'100%'}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <FiberMapContent {...this.props}/>
      </Map>
  }

}
