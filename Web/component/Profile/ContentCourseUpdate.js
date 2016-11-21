import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,Chip,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"

import { updateCourse,uploadCourse,uploadCourseFiles,fetchVendorCourse,fetchACourse } from "../Actions/courseActions"
import { saveTags,addTag,deleteTag} from "../Actions/tagActions"

import Toast from "../Toast.js"

var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}
var count = 1

@connect((store) => {
  return {
    user: store.user,
    course: store.course,
    profile: store.profile,
    tags: store.tags
  };
})/*dont add semicolon here!*/



class ContentCourseUpdate extends Component {
    /**
     * Check if array contains tag text
     * @param {array,text} array, text 
     * @return {boolean} boolean - return boolean
     */
    contains(a, text) {
        var i = a.length;
        while (i--) {
           if (a[i].text == text) {
               return true;
           }
        }
        return false;
    }

    /**
     * Handle add tag
     */
    handleAddTag(){
      const tags = this.props.tags
        var tagText = document.getElementById("addTagUpd").value
        if (tagText){
          if(!this.contains(tags,tagText)){
            if(tags.length<5){
              this.props.dispatch(addTag(tagText));
            }
          }
        }
        
    }
    /**
     * Handle delete tag
     */
    handleDelete(text){
        this.props.dispatch(deleteTag(text))
    }

    /**
     * Invoked immediately before a component is mounted, to get our state to current course
     */
    componentWillMount(){
        const {user} = this.props
        const {course}=this.props
        this.props.dispatch(fetchACourse(course.aCourseName));
    }
    
     /**
     * Invoked immediately after a component is mounted, to get text on textfield
     */
    componentDidUpdate(){
        const {course} = this.props
        document.getElementById("courseName").value=course.aCourse.courseName;
        document.getElementById("courseDescription").value=course.aCourse.courseDescription;
        document.getElementById("courseVideoId").value=course.aCourse.courseVideoId;
        if (course.aCourse.courseTags&&count==1){
            this.props.dispatch(saveTags(course.aCourse.courseTags));
            count--
        }

    }
    
    /**
     * Handle file selecting
     */
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
    

    /**
     * Handle updating course
     */
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
        const tags = this.props.tags
        var courseTags = tags
        var newCourse = {courseName, courseDescription, courseVendorEmail,courseVideoId,courseID,courseTags}
        this.props.dispatch(updateCourse(newCourse,courseID));
        
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
                                <Textfield style={{width:"100px"}} floatingLabel maxLength="20" label="Tags"  type="addTag" className="form-control" id="addTagUpd"/>
                                <Button onClick = {this.handleAddTag.bind(this)}>add tag</Button>
                                
                            </CardText>

                            <CardText>{mappedTags}</CardText>
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
