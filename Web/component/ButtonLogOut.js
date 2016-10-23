import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import FirebaseTools from './Firebase.js'

var buttonStyle = {
    marginLeft:'2dp!important'
}

class ButtonLogOut extends Component {
  	requestSubmit() {
    	// Add signup event
    	FirebaseTools.logoutUser();
	}
    render(){
        return(
	      <div className="android-content mdl-layout__content">
	        <a name="top" />
	        <div style={{width: '80%', margin: 'auto'}}>
	          <form style={formStyle} onSubmit={this.requestSubmit}>
	            <CardActions>
	                <Button accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Logout</Button>
	            </CardActions>
	          </form>
	        </div>
	      </div>
        );}
};


export default ButtonLogOut