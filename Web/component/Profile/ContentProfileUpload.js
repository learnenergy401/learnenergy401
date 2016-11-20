import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import {findDOMNode, render} from 'react-dom'


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
    constructor () {
        super()
        this.state = {tags: []}
    }

    handleChange (tags) {
        this.setState({tags})
        console.log(this.state.tags)
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
        console.log(this.state.tags)
        var courseTags = this.state.tags
        var course = {courseName, courseDescription, courseVendorEmail,courseVideoId}
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
                                <Textfield floatingLabel label="courseName" className="form-control" id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseDescription" type="courseDescription" className="form-control" id="courseDescription"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseVideoId"  type="courseVideoId" className="form-control" id="courseVideoId"/>
                            </CardText>
                            <CardText style={componentStyle}>
                              
                            </CardText>
                        

                            <CardActions style={componentStyle}>
                                <Button onClick={this.uploadCourse.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Submit Course</Button>
                            </CardActions>
                        </div>
                    </div>

            </Content>

    )}
};


export default ContentProfileUpload
