import React, { Component } from 'react'
import {Content,CardText,CardActions,Card,CardTitle} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { connect } from "react-redux"
import { fetchACourse} from "../Actions/courseActions"
import YouTube from './Youtube.js'


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
    /**
    * display the layout for coursedetails
    * @return {html} display the layout
    */
    render(){
    	const {course}=this.props
        const opts = {
            height: '360',
            width: '480',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
            }
        }
        return(
          <div style={{height:'400px'}} className="learnContent mdl-typography--text-center">

          	  <Card  style={cardStyle} >
          	  <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">{course.aCourse.courseName}</CardTitle>
          	  <div className="mdl-layout__content">
              <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                        <CardText style={componentStyle}>{course.aCourse.courseDescription}</CardText>
                        <div>
                            <YouTube
                                videoId={course.aCourse.courseVideoId}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
               </div>
               </Card>

          </div>
        );
    }
};



export default ContentCourseDetail
