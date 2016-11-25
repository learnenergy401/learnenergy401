import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var divStyle = {
    order: 3,
    WebkitTransition: 'all',
    msTransition: 'all'
}

class ButtonSignUpAD extends Component {

    /**
    * Loads the button for signupAD.
    * @return {html} - returns button and links
    */
    render(){
        return(
          <Link to={this.props.to}>
              <Button raised ripple accent className="mdl-color--indigo mdl-color-text--white" >
                Additional Resource
              </Button>
           </Link>
        );}
};


export default ButtonSignUpAD
