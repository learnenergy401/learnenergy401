import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentCourseDetail from './ContentCourseDetail.js'

var contentStyle = {
    height: '1000px!important',
}

/**
* class to display course details
*@return display course details
*/
class CourseDetail extends Component {
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentCourseDetail style={contentStyle}/>
        <LearnFooter/>
      </div>
    );
  }
}




export default CourseDetail