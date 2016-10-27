import React, { Component } from 'react'
import {Content, Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import SideMenuProfile from './SideMenuProfile.js'

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class ContentProfile extends Component {
    render(){
        return(
          <div  className="learn-content mdl-typography--text-center">
              <SideMenuProfile/>
          </div>
        );
    }
};



export default ContentProfile