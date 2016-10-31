import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../extra/material.js"
import { fetchVendorCourse } from "./Actions/courseActions"
@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class ContentCourseDisplay extends Component{
    componentWillMount(){   
        this.props.dispatch(fetchVendorCourse());
    }
    
    
    
    render(){
        const {course}=this.props
        
        return(
            
            <Content className="learn-content">
            <div>{JSON.stringify(course.currentVendorCourseList, null, 2)}</div>
            </Content>
        )
    }



} 

export default ContentCourseDisplay