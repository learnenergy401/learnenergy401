import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../extra/material.js"

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class ContentCourseDisplay extends Component{
    render(){
        return(
            <Content className="learn-content">
            <p>test yo</p>
            </Content>
        )
    }



} 

export default ContentCourseDisplay