import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,Chip,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"
import { updateCourse } from "../Actions/courseActions"
import { uploadCourse } from "../Actions/courseActions"
import { fetchVendorCourse } from "../Actions/courseActions"
import { fetchACourse} from "../Actions/courseActions"
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
        var tagText = document.getElementById("addTagUpd").value
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
        console.log(course.aCourse.courseTags)
        if (course.aCourse.courseTags&&count==1){
            this.props.dispatch(saveTags(course.aCourse.courseTags));
            count--
        }

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
                        <div style={{width: '80%', margin: 'auto'}}>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseName" className="form-control"  id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseDescription" type="courseDescription" className="form-control" id="courseDescription"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseVideoId"  type="courseVideoId" className="form-control" id="courseVideoId"/>
                            </CardText>
                            <CardText style={componentStyle}>
                                <Textfield style={{width:"100px"}} floatingLabel maxLength="20" label="Tags"  type="addTag" className="form-control" id="addTagUpd"/>
                                <Button onClick = {this.handleAddTag.bind(this)}>add tag</Button>
                                
                            </CardText>

                            <CardText>{mappedTags}</CardText>
                        
                            <CardActions style={componentStyle}>
                                <Button onClick={this.updateCourse.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Update Detail</Button>
                            </CardActions>
                        </div>
                    </div>
            </Content>
    )}
};



export default ContentCourseUpdate
