import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import store from './store'
import * as actions from './actions'

// called whenever there's a need to update the react ui
export default function refresh(){
  // Q: What does {...store} {...actions} do?
  // console.log('store:', store, 'actions', actions)
  ReactDom.render(<App {...store} {...actions}/>, document.getElementById('react'))
  // Q: Where is the element #react defined?
}
