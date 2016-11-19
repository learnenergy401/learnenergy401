import React, { Component } from 'react'
import {Content,CardText,CardActions,Card,CardTitle, Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { connect } from "react-redux"
import { storeReqEOI, fetchACourse} from "../Actions/courseActions"
import YouTube from './Youtube.js'


var componentStyle = {
    margin: 'auto',
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'550px'
}

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})
class ContentCourseDetail extends Component {

  fetchACourse(aCourseName) {
    this.props.dispatch(fetchACourse(aCourseName))
  }

  storeReqEOI(info) {
    this.props.dispatch(storeReqEOI(info))
  }
  /**
   * Invoked immediately before a component is unmounted and destroyed, to update our states
   */
  componentWillMount(){
		const {course}=this.props
        this.props.dispatch(fetchACourse(course.aCourseName));
    }
    /**
     * plays video
     */
    _onReady(event) {
    // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    req_EOI() {
      var vendor_uid = "gE88Fyh2a8Pbstvq1Yv3QgnoTYf1"
      var course_id = "ggggg"
      info = {vendor_uid, course_id}

      this.storeReqEOI(info)
      
    }

    /**
    * display the layout for coursedetails
    * @return {html} display the layout
    */
    render(){
    	const {course}=this.props
        const opts = {
            height: '480',
            width: '560',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
            }
        }
        console.log('course is', course)
        return(
          <div style={{height:'660px'}} className="learnContent mdl-typography--text-center">

          	  <Card  style={cardStyle} >
          	  <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">{course.aCourse.courseName}</CardTitle>
          	  <div className="mdl-layout__content">
              <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
            {/*<CardText style={componentStyle}>{course.aCourse.courseDescription}</CardText>*/}
                        <div>
                            <YouTube style={{height:'600px'}}
                                videoId={course.aCourse.courseVideoId}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.req_EOI.bind(this)}>request EOI</Button>
               </div>
               </Card>

          </div>
        );
    }
};



export default ContentCourseDetail
