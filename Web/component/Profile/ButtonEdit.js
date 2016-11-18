import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var buttonStyle = {
    positon: 'absolute'
}
class ButtonEdit extends Component {
    /**
    * Loads the button for Login.
    * @return {html} - returns button and links
    */
    render(){
        return(
          <Link to={this.props.to} >
              <Button  style={buttonStyle} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--pink" >
                Edit
              </Button>
           </Link>
        );}
};


export default ButtonEdit
