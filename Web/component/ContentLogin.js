import React, { Component } from 'react'
import {Content, Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import ComponentLogin from './ComponentLogin.js'

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class ContentLogin extends Component {
    render(){
        return(
          <div  className="learn-content mdl-typography--text-center">
              <Card shadow={0} style={cardStyle} >
                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Login</CardTitle>
                   <ComponentLogin/>
              </Card>
          </div>
        );
    }
};



export default ContentLogin