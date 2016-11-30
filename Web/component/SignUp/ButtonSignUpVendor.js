import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var divStyle = {
    order: 3,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}
var buttonStyle = {
  width: '250px',
  marginLeft:'0px'
}
class ButtonSignUpVendor extends Component {

    /**
    * Loads the button for signupVendor.
    * @return {html} - returns button and links
    */  
    render(){
        return(
          <Link to={this.props.to}>
              <Button raised ripple accent style={buttonStyle} className="mdl-color--indigo mdl-color-text--white" >
                Vendor
              </Button>
           </Link>
        );}
};


export default ButtonSignUpVendor