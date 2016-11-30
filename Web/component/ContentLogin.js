import React, { Component } from 'react'
import {Content, Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import ComponentLogin from './ComponentLogin.js'

var cardStyle = {
    width: '80%',
    margin: 'auto',    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}
var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

class ContentLogin extends Component {
    /**
    * Loads the card for the login form
    * @return {html} - returns the ContentLogin component
    */
    render(){
        return(
          <div  className="learn-content mdl-typography--text-center">
          <div style={spacerStyle} />
              <Card shadow={0} style={cardStyle} >
                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Login</CardTitle>
                <ComponentLogin/>
              </Card>
              <div style={spacerStyle} />
          </div>
        );
    }
};



export default ContentLogin
