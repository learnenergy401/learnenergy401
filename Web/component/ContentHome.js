import React, { Component } from 'react'
import {Content} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class ContentHome extends Component {
    render(){
        return(
          <div  className="learn-content mdl-layout__content mdl-typography--text-center">
            <a name="top" /> 
              <div className="logo-font learn-slogan">Learn Energy</div>
              <div className="logo-font learn-sub-slogan">some introduction text here.</div>
              <a href="#screens">
              </a>     
          </div>
        );
    }
};



export default ContentHome