import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button,Chip} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import {findDOMNode, render} from 'react-dom'


import "../../extra/material.js"
import { uploadCourse } from "../Actions/courseActions"
import { addTag,deleteTag } from "../Actions/tagActions"
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
    tags: store.tags
  };
})/*dont add semicolon here!*/





class ContentProfileUpload extends Component {
    contains(a, text) {
        var i = a.length;
        while (i--) {
           if (a[i].text == text) {
               return true;
           }
        }
        return false;
    }
    handleAddTag(){
      const tags = this.props.tags
        var tagText = document.getElementById("addTag").value
        if (tagText){
          if(!this.contains(tags,tagText)){
            if(tags.length<5){
              this.props.dispatch(addTag(tagText));
            }
          }
        }
        
    }
    handleDelete(text){
        this.props.dispatch(deleteTag(text))
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
        const tags = this.props.tags
        var courseTags = tags
        var course = {courseName, courseDescription, courseVendorEmail,courseVideoId,courseTags}
        this.props.dispatch(uploadCourse(course));
    }
    /**
    * Loads the course profile
    * @return {html} - returns course profile depending on type of user
    */

    render(){
        const tags = this.props.tags
        const mappedTags = tags.map(tag =>
            
            <Chip style={{marginRight:"3px"}} key={tag.text} onClose={()=>(this.handleDelete(tag.text))}>{tag.text}</Chip>

        )
        return(
            <Content className="learn-content">
                <div className="android-content mdl-layout__content">
                        <a name="top" />
                        <div style={{width: '80%', margin: 'auto'}}>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="Course Name" className="form-control" id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="Course Description" type="courseDescription" className="form-control" id="courseDescription"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="Video ID"  type="courseVideoId" className="form-control" id="courseVideoId"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield style={{width:"100px"}} floatingLabel maxLength="20" label="Tags"  type="addTag" className="form-control" id="addTag"/>
                                <Button onClick = {this.handleAddTag.bind(this)}>add tag</Button>
                                
                            </CardText>

                            <CardText>{mappedTags}</CardText>
                        

                            <CardActions style={componentStyle}>
                                <Button onClick={this.uploadCourse.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Submit Course</Button>
                            </CardActions>
                        </div>
                    </div>

            </Content>

    )}
};


export default ContentProfileUpload
