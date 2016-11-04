import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { logOutUser } from "./Actions/userActions"

var buttonStyle = {
    marginLeft:'2dp!important'
}

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

class ButtonLogOut extends Component {
    logOutUser(){
        this.props.dispatch(logOutUser())
    }
    /**
    * Loads the button for Logout.
    * @return {html} - returns button and links
    */
    render(){
        return(
          <Link to={'/'}>
            <Button style={buttonStyle} onClick={this.logOutUser.bind(this)} className="mdl-color-text--indigo" >
              LOG OUT
            </Button>
          </Link>
        )
    }
};

export default ButtonLogOut
