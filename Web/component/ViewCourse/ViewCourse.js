import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentViewCourse from './ContentViewCourse.js'
import CourseList from './CourseList.js'


class ViewCourse extends Component {
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentViewCourse/>
        <LearnFooter/>
      </div>
    );
  }
}




export default ViewCourse