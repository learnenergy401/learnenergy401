import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var buttonStyle = {
    marginLeft:'2dp!important'
}
class ButtonProfile extends Component {
    /**
    * Loads the button for Login.
    * @return {html} - returns button and links
    */
    render(){
        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                My Console
              </Button>
           </Link>
        );}
};


export default ButtonProfile