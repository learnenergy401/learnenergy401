import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"
import { updateCourse,uploadCourse,uploadCourseFiles,fetchVendorCourse,fetchACourse } from "../Actions/courseActions"
import Toast from "../Toast.js"

var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}


@connect((store) => {
  return {
    user: store.user,
    course: store.course,
    profile: store.profile
  };
})/*dont add semicolon here!*/


class ContentCourseUpdate extends Component {
    
    
    componentWillMount(){
        const {user} = this.props
        const {course}=this.props
        this.props.dispatch(fetchACourse(course.aCourseName));
    }
    
    componentDidUpdate(){
        const {course} = this.props
        document.getElementById("courseName").value=course.aCourse.courseName;
        document.getElementById("courseDescription").value=course.aCourse.courseDescription;
        document.getElementById("courseVideoId").value=course.aCourse.courseVideoId;
    }
    
    handleFileSelect(evt) {
      const {course}=this.props
      var courseID = course.aCourse.courseID;
      var coursePrev = course.aCourse;
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
      var fileName = file.name;
      var metadata = {
        'contentType': file.type
      };
      
      this.props.dispatch(uploadCourseFiles(courseID,coursePrev,{fileName,file,metadata}));
    }
    
    updateCourse(){
        const {course} = this.props
        var prevName=course.aCourse.courseName;
        var prevID=course.aCourse.courseID;
        var user = this.props.user.user
        var courseName = document.getElementById("courseName").value;
        var courseDescription = document.getElementById("courseDescription").value;
        var courseVideoId = document.getElementById("courseVideoId").value;
        var courseVendorEmail = user.email
        var courseID=prevID;
        var newCourse = {courseName, courseDescription, courseVendorEmail,courseVideoId,courseID}
        this.props.dispatch(updateCourse(newCourse,courseID));
        
    }
    /**
    * Loads the course profile
    * @return {html} - returns course profile depending on type of user
    */
    render(){
        return(
            <Content className="learn-content">
                <div className="android-content mdl-layout__content">
                        <a name="top" />
                        <div style={{width: '80%', margin:'auto'}}>
                            
                            <CardText style={componentStyle}>
                                <p style={{color:'mediumblue',marginBottom:'0px'}}>Course Name</p>
                                <Textfield label="" className="form-control" ref="courseName" id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>
                                <p style={{color:'mediumblue',marginBottom:'0px'}}>Course Description</p>
                                <Textfield  label="" ref="courseDescription" type="courseDescription" className="form-control" id="courseDescription"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <p style={{color:'mediumblue',marginBottom:'0px'}}>Course Video ID</p>
                                <Textfield  label="" ref="courseVideoId" type="courseVideoId" className="form-control" id="courseVideoId"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <p style={{color:'mediumblue',marginBottom:'0px'}}>Course Files</p>
                                <Textfield  label="Empty" ref="courseFiles" type="courseFiles" className="form-control" id="courseVideoId"/>
                            </CardText>
                        <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">
                        <h6>Choose File to upload</h6>
                        <input type="file" id="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
                        <span id="linkbox"></span>
                        </div>
                            <CardActions style={componentStyle}>
                                <Button onClick={this.updateCourse.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Update Detail</Button>
                            </CardActions>
                        </div>
                    </div>
            </Content>
    )}
};



export default ContentCourseUpdate
