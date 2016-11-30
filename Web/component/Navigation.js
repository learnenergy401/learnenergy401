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
    /**
    * Loads the options on the header for Navigation
    * @return {html} - returns Component for the header options
    */
    render(){
        return(
        <div style={containerStyle}>
            <Navigation style={navStyle} className="learn-navigation">
              
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href="#view-course">Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href="#view-vendor">Vendors</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase mdl-color-text--grey-800" href="#ad-page">Additional Resources</a>
            </Navigation>
        </div>
        );}
};


export default LearnNavigation
