import React, {Component, PropTypes} from 'react'

import FiberMap from './FiberMap'
import FiberCostTable from './FiberCostTable'

export default class App extends Component {

  render(){
    const { fibers } = this.props    
    return <div className="row">
        <div className="col s4">
          <FiberCostTable {...this.props}/>
        </div>
        <div className="col s8">
          <FiberMap {...this.props}/>
        </div>
      </div>
  }
}
