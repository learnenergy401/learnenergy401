import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import "../../extra/material.js"

var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}


@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})/*dont add semicolon here!*/


class ContentProfileUpload extends Component {
    courseSubmit(){
        console.log("gg")
    }
    render(){
        return(
            <Content className="learn-content">
                <div className="android-content mdl-layout__content">
                        <a name="top" />
                        <div style={{width: '80%', margin: 'auto'}}>
                            <CardText style={componentStyle}>
                                <Textfield floatingLabel label="courseName" className="form-control" ref="courseName" id="courseName"/>
                                </CardText>
                            <CardText style={componentStyle}>        
                                <Textfield floatingLabel label="courseDescription" ref="pw" type="courseDescription" className="form-control" id="pw"/>
                            </CardText>
                            <CardActions style={componentStyle}>
                                <Button onClick={this.courseSubmit.bind(this)} accent ripple  className="mdl-color-text--indigo btn btn-primary">Submit Course</Button>
                            </CardActions>
                        </div>
                    </div>
            </Content>
    )}
};



export default ContentProfileUpload