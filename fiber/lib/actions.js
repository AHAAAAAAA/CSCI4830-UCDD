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

      const center = geolib.getCenter(d.coordinates)

      return {
        geometry: d,
        center: center
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

   const fiberPosition = {
 latitude: fiber.geometry.coordinates[0][1],
 longitude: fiber.geometry.coordinates[0][0]
 }

 if(geolib.getDistance(store.selectedPosition, fiberPosition) < NEARBY_METERS){
 	  fiber.isSelected = true
   }
  else{
  fiber.isSelected = false
}
/*  var center = geolib.getCenter(fiber.geometry.coordinates)
  var selected = store.selectedPosition
  if (geolib.getDistance(center, selected)<=NEARBY_METERS){
    fiber.isSelected = true
  }*/
}

// helper to set the cost of connecting this fiber to the selected position
function forEachFiberSetCost(fiber){

  // TODO: implement the logic to calcualte the cost of connecting from the selected
  // position to this fiber, and the distance between them.

  const fiberPosition = {
latitude: fiber.geometry.coordinates[0][1],
longitude: fiber.geometry.coordinates[0][0]
}


fiber.distance = geolib.getDistance(store.selectedPosition, fiberPosition)
  fiber.cost = Math.round((40 * fiber.distance)) //Assuming $40/metre of fiber
}
