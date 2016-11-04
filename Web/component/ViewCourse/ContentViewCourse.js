import React, { Component } from 'react'
import {Content} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import CourseList from "./CourseList.js"

class ContentViewCourse extends Component {
    render(){
        return(
          <div  className="learnContent mdl-typography--text-center">
              <CourseList/>
          </div>
        );
    }
};



export default ContentViewCourse