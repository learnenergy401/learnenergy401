import React, { Component } from 'react'
import {Content, Layout,Button,List, ListItem,ListItemContent,Card,CardText,CardTitle,CardList} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"
import { fetchCourse,saveACourse } from "../Actions/courseActions"

var listItemStyle =  {
    width:"100%",
    height:"200px"
}

var cardStyle = {
    width:"100%"
}

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class CourseList extends Component{
    onListItemClick(){
        console.log(course.courseName)
    }
    componentWillMount(){   
        this.props.dispatch(fetchCourse());
    }

    saveACourse(courseName){   
        this.props.dispatch(saveACourse(courseName));
        window.location.assign("/#view-course-detail");
    }
    
    
    jsonToArray(json){
        var arr = [];
        for (var prop in json) {
            arr.push(json[prop]);
        }
        return arr
    }
    render(){
        const {course}=this.props
        if (course.courseList){
            var arr = this.jsonToArray(course.courseList)
            const mappedCourse = arr.map(course => 
                
                <div style={listItemStyle} key = {course.courseName} className="mdl-card mdl-shadow--2dp " onClick={()=>(this.saveACourse(course.courseName))}>
                    <div className="mdl-card__title" >
                        <h2 className="mdl-card__title-text">
                            {course.courseName}
                        </h2>
                    </div>
                     <div className="mdl-card__supporting-text"> 
                        {course.courseDescription}
                    </div>
                </div>
                )
            
            return(
                <div>
                    {mappedCourse}
                </div>

            )
                                         
        }else{
            return(

                <Content className="learn-content">
                
                </Content>
            )
        }
        
    }
}

export default CourseList