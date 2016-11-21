import React, { Component } from 'react'
import {Content} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import CourseList from "./CourseList.js"


var contentStyle = {

  backgroundColor: "#f3f3f3"
}

class ContentViewCourse extends Component {
    /**
    * view course render
    * @return {html} display courses
    */
    render(){
        return(
          <div style={contentStyle} >
              <CourseList/>
          </div>
        );
    }
};



export default ContentViewCourse
