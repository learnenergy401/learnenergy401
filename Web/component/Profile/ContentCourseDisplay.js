    import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"
import { fetchVendorCourse } from "../Actions/courseActions"

var listStyle = {
    width : "80%",
    marginLeft: "20%",

}

var listItemStyle =  {
    width : "100%",
    height:"100px",
    margin: "10px"
}

var cardTitleStyle = {
    right: "0px",
    background:"#3F51B5",
    color:"white"
}
var cardTextStyle= {
    textAlign: "left",
    paddingLeft: "18px"
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
                                        <div style={listItemStyle} key = {course.courseName} className="mdl-card mdl-shadow--2dp" onClick={()=>(this.saveACourse(course.courseName))}>
                                            <div style={cardTitleStyle} className="mdl-card__title" >
                                                <h2  className="mdl-card__title-text">
                                                    {course.courseName}
                                                </h2>
                                            </div>
                                             <div style={cardTextStyle} className="mdl-card__supporting-text">
                                                {course.courseDescription}
                                            </div>
                                        </div>
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
