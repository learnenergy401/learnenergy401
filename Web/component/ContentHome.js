import React, { Component } from 'react'
import {Content} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class ContentHome extends Component {
    /**
    * Loads the front page middle section
    * @return {html} - returns the contentHome component
    */
    render(){
        return(
          <div  className="learn-content mdl-typography--text-center">
            <a name="top" />
              <div className="logo-font learn-slogan">Learn Energy</div>
              <div className="logo-font learn-sub-slogan">Our mission is to create an international community for the sharing of knowledge and the collaborative development of new education and training.</div>
              <a href="#screens">
              </a>
          </div>
        );
    }
};



export default ContentHome
