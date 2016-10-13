import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



// import your js component here
import Home from "./Home/Home.js"
import SignUp from "./SignUp/SignUp.js"

class ReactRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        
        {/* Add routes below but above 404 */}
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
        <Route path='/signup' component={SignUp} />
        
        {/* 404 not fond page, make sure it stay at bottom */}
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

// Hard coded pages (TEMP!)
const NotFound = () => <h1>404.. This page is not found!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>

// Export Router for compile use
export default ReactRouter
