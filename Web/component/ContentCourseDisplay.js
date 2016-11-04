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
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our state to get vendor courses
     */
    componentWillMount(){
        const {user} = this.props
        this.props.dispatch(fetchVendorCourse(user.user.email));
    }

    /**
     * Coverts json to array
     * @return {object} arr - return array from converted json object
     */
    jsonToArray(json){
        var arr = [];
        for (var prop in json) {
            arr.push(json[prop]);
        }
        return arr
    }
    /**
    * Loads the webpage for course display
    * @return {html} - returns avaiable courses
    */
    render(){
        const {course}=this.props
        if (course.currentVendorCourseList){
            var arr = this.jsonToArray(course.currentVendorCourseList)
            const mappedCourse = arr.map(course =>
                                        <li key = {course.courseName}>{course.courseName}</li>
                                       )
            return(

                <Content className="learn-content">
                <ul>{mappedCourse}</ul>
                </Content>
            )

        }else{
            return(

                <Content className="learn-content">

                </Content>
            )
        }

    }
}

export default ContentCourseDisplay
