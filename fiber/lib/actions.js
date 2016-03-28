import store from './store'
import refresh from './refresh'
import _ from 'lodash'
import geolib from 'geolib'
import $ from 'jquery'
import { NEARBY_METERS } from './constants'

//
// Action functions
//

// Action to load fiber data asynchrnously
export function loadDataAsync(){

  $.ajax('/data/boulder.json').done(function(json) {
    store.geometries = json

    let fibers = {}

    store.fibers = _.map(json, (d) => {


      // TODO: implement the correct logic to compute the center of the geometry
      // hint: use geolib.getCenter()      
      var points = [];
      for (var i = 0; i < d.length; i++){
        points.push({latitude: d.coordinates[i][1], longitude: x.coordinates[i][0]})
        console.log(i)
      }

      const center = geolib.getCenter(points)
      // console.log(d)

      return {
        geometry: d,
        center: geolib.getCenter([{latitude: center.latitude, longitude: center.longitude}])
      }
    })

    refresh()
  })
}

// Action to set a position selected by the user
export function setSelectedPosition(latlng) {
  store.selectedPosition = latlng

  _.forEach(store.fibers, forEachFiberSetIsSelected)

  _.forEach(store.fibers, forEachFiberSetCost)

  refresh()
}

//
// private helper function
//

// helper to set each fiber's 'isSelected' flag based on whether this fiber is
// nearby with respect to the position selected by the user
function forEachFiberSetIsSelected(fiber){

   // TODO: implement the logic to set fiber.isSelected if the fiber's geometry center
   // is within a certain distance from the selected position 'NEARBY_METERS'
   // hint: use geolib.getDistance()

  fiber.isSelected = false
}

// helper to set the cost of connecting this fiber to the selected position
function forEachFiberSetCost(fiber){

  // TODO: implement the logic to calcualte the cost of connecting from the selected
  // position to this fiber, and the distance between them.

  fiber.distance = Math.round((2000 * Math.random()))
  fiber.cost = Math.round((1000 * Math.random()))
}
