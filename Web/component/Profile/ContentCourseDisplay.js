import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import ButtonEdit from './ButtonEdit.js';
import "../../extra/material.js"
import { fetchVendorCourse } from "../Actions/courseActions"
import { changeMenu } from "../Actions/profileActions"
import { fetchCourse,saveACourse } from "../Actions/courseActions"    
var contentStyle = {
    width : "80%"
}

var listStyle = {
    width : "100px",

}

var listItemStyle =  {
    height:"60px!important",
    margin: "10px",
    backgroundColor:"white"
}

var cardTitleStyle = {
    right: "0px",

}




@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class ContentCourseDisplay extends Component{
    /** 
    * Save a coure for course Detail
    */
    saveACourse(courseName){
        this.props.dispatch(saveACourse(courseName));
        this.props.dispatch(changeMenu(10))
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our state to get vendor courses
     */
    componentWillMount(){
        const {user} = this.props
        this.props.dispatch(fetchVendorCourse(user.user.email));
    }

    /**
     * Coverts json to array
     * @param {object} json 
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
                                        <div style={listItemStyle} key = {course.courseName} className=" mdl-shadow--2dp" onClick={()=>(this.saveACourse(course.courseName))}>
                                            <div style={cardTitleStyle} className="mdl-card__title" >
                                                <h2  className="mdl-card__title-text">
                                                    {course.courseName}
                                                </h2>
                                                <div className="mdl-layout-spacer" />
                                                
                                            </div>
                                        </div>
                )
            return(

                <Content className="learn-content">
                <div>{mappedCourse}</div>
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
