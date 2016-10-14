import React, { Component } from 'react'
import {Navigation} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var containerStyle={
    /* Simple hack to make the overflow happen to the left instead... */
    direction: 'rtl',
    width: '500px',
    transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),width 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
}


var navStyle={
    width: '800px',
    WebkitTransition: 'all', 
    msTransition: 'all' 
  }


class LearnNavigation extends Component {
    render(){
        return(
        <div style={containerStyle}>
            <Navigation style={navStyle} className="learn-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href>Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href>Pricing</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href>How it works</a>
            </Navigation>
        </div>
        );}
};


export default LearnNavigation