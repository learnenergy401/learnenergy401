import React, { Component } from 'react'
import {Content, Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import ComponentSignUpPurchaser from './ComponentSignUpPurchaser.js'

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class ContentSignUpPurchaser extends Component {
    render(){
        return(
          <div  className="learn-content mdl-typography--text-center">
              <div style={spacerStyle} />
              <Card shadow={0} style={cardStyle} >
                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Sign Up: Purchaser</CardTitle>
                <ComponentSignUpPurchaser/>
              </Card>
          </div>
        );
    }
};



export default ContentSignUpPurchaser
