import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
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
			<form onSubmit={this.requestSubmit}>
				<Button style={buttonStyle} className="mdl-color-text--indigo" >
					LOG OUT
				</Button>
			</form>
				
        );}
};


export default ButtonLogOut