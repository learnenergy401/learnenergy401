import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import TagsInput from 'react-tagsinput'

import "../../extra/material.js"
import { uploadCourse } from "../Actions/courseActions"
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
    course: store.course
  };
})/*dont add semicolon here!*/


class ContentProfileUpload extends Component {
    constructor() {
        super()
        this.state = {tags: []}
    }
    
    handleChange(tags) {
        this.setState({tags})
    }
    /**
    * Uploads course
    * @param {object} course - takes course for upload
    * @returns {object} arr - return array from converted json object
    */
    uploadCourse(course){
        var user = this.props.user.user
        var courseName = document.getElementById("courseName").value;
        var courseDescription = document.getElementById("courseDescription").value;
        var courseVideoId = document.getElementById("courseVideoId").value;
        var courseVendorEmail = user.email
        var course = {courseName, courseDescription, courseVendorEmail, courseVideoId, courseTags}
        this.props.dispatch(uploadCourse(course));
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
                        <div style={{width: '80%', margin: 'auto'}}>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseName" ref="courseName" className="form-control"  id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseDescription" ref="courseDescription" type="courseDescription"  id="courseDescription"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseVideoId" ref="courseVideoId" type="courseVideoId"  id="courseVideoId"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <TagsInput  ref="courseTags" value={this.state.tags} onChange={::this.handleChange} />
                            </CardText>
                            <CardActions style={componentStyle}>
                                <Button    onClick={this.uploadCourse.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Submit Course</Button>
                            </CardActions>
                        </div>
                    </div>
            </Content>
    )}
};



export default ContentProfileUpload
