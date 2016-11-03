import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentCourseDetail from './ContentCourseDetail.js'



class CourseDetail extends Component {
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentCourseDetail/>
        <LearnFooter/>
      </div>
    );
  }
}




export default CourseDetail