import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { changeMenu } from "../Actions/profileActions"
import { connect } from "react-redux"
import { saveACourse } from "../Actions/courseActions"
var buttonStyle = {
    positon: 'absolute'
}


@connect((store) => {
  return {
    user: store.user,
    profile: store.profile
  };
})
class ButtonEdit extends Component {
    changeMenuNumberThree(courseName){
        this.props.dispatch(changeMenu(3))
        this.props.dispatch(saveACourse(courseName))
    }
    
    /**
    * Loads the button for edit.
    * @return {html} - returns button and links
    */
    render(){
        const {user,profile,course} = this.props
        return(
          
              <Button  style={buttonStyle} key = {course.courseName} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--pink" onClick={this.changeMenuNumberThree(course.courseName).bind(this)}>
                Edit
              </Button>
           
        );}
};


export default ButtonEdit
