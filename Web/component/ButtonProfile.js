import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { getCurrentUser } from './Actions/userActions'
import { connect } from "react-redux"
import store from './Store.js'
var buttonStyle = {
    marginLeft:'2dp!important'
}
@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/
class ButtonProfile extends Component {
    /**
    * Gets current user
    * @return {object} user - Returns current user logged in
    */
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount(){
      this.getCurrentUser()
    }
    /**
    * Loads the button for Login.
    * @return {html} - returns button and links
    */
    render(){
      const {user} = this.props

        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                PROFILE
              </Button>
           </Link>
        );}
};


export default ButtonProfile
