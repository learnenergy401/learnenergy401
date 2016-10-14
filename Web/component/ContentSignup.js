import React, { Component } from 'react'
import {Content, Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import ComponentSignUp from './ComponentSignUp.js'



var cardStyle = {
    width: '80%',
    margin: 'auto',
    marginTop: '50px',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class ContentSignUp extends Component {
    render(){
        return(
          <div  className="learn-content mdl-layout__content mdl-typography--text-center">
              <Card shadow={0} style={cardStyle} >
                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">SignUp</CardTitle>
                <ComponentSignUp/>
              </Card>
          </div>
        );
    }
};



export default ContentSignUp