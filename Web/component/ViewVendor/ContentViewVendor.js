import React, { Component } from 'react'
import {Content,Grid,Cell} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import VendorList from "./VendorList.js"


var contentStyle = {

  backgroundColor: "#f3f3f3"
}

class ContentViewVendor extends Component {
    /**
    * view vendor render
    * @return {html} display courses
    */
    render(){
        return(
          <div style={contentStyle} >
              <VendorList/>
          </div>
        );
    }
};



export default ContentViewVendor
