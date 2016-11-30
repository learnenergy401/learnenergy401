import React, { Component } from 'react'
import {Content,Grid,Cell } from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import CourseList from "./CourseList.js"
import SideMenuCourse from "./SideMenuCourse.js"

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
              <Grid style={{padding:"0px"}} >
                <Cell col={3}  style={{margin:"0px",background:"#37474F"}} >
                  <SideMenuCourse/>
                </Cell>
                <Cell col={9} >
                 <CourseList/>
                </Cell>
              </Grid>
          </div>
        );
    }
};



export default ContentViewCourse
