import React, { Component } from 'react'
import {Content,CardText,CardActions,Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { connect } from "react-redux"
import { fetchACourse} from "../Actions/courseActions"

var componentStyle = {
    margin: 'auto',
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'300px'
}

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})
class ContentCourseDetail extends Component {
	componentWillMount(){   
		const {course}=this.props
        this.props.dispatch(fetchACourse(course.aCourseName));
    }


    render(){
    	const {course}=this.props
        return(
          <div style={{height:'400px'}} className="learnContent mdl-typography--text-center">
          
          	  <Card  style={cardStyle} >
          	  <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">{course.aCourse.courseName}</CardTitle>
          	  <div className="mdl-layout__content">
              <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                        <CardText style={componentStyle}>{course.aCourse.courseDescription}</CardText>

                    </div>
               </div>
               </Card>
          
          </div>
        );
    }
};



export default ContentCourseDetail