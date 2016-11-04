import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var divStyle = {
    height: '40px',
    width: '100px',
    position: 'absolute',
    bottom: '16px',
    WebkitTransition: 'all',
    msTransition: 'all'
}

class SignUpButton extends Component {
    /**
    * Loads the logo for the header
    * @return {html} - returns logo in the header
    */
    render(){
        return(
          <Link to={this.props.to}>
              <img src="images/learn_logo.png" />
           </Link>
        );}
};


export default SignUpButton
