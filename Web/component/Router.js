import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


// import mdl
import "../extra/material.js"
import "../../firebase.config.js"


// import your js component here
import Home from "./Home/Home.js"
import SignUp from "./SignUp/SignUp.js"
import Login from "./Login-Logout/Login.js"
import Logout from "./Login-Logout/Logout.js"
import Admin from "./Admin.js"

class ReactRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        
        {/* Add routes below but above 404 */}
        <Route path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/admin'component={Admin}/>
        {/* 404 not fond page, make sure it stay at bottom */}
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

// Hard coded pages (TEMP!)
const NotFound = () => <h1>404.. This page is not found!</h1>

// Export Router for compile use
export default ReactRouter
