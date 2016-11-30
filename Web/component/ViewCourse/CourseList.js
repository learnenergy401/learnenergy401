 import React, { Component } from 'react'
import {Content, Layout,Button,List, ListItem,ListItemContent,Chip,Card,CardText,CardTitle,CardList,Textfield} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import SearchInput, {createFilter} from 'react-search-input'


import "../../extra/material.js"
import { fetchCourse,saveACourse } from "../Actions/courseActions"

const KEYS_TO_FILTERS = ['courseName', 'courseDescription']



var listStyle = {

    overflow:"scroll",
    height:"100%"
}

var listItemStyle =  {
    width : "99.9%",
    height:"100px",
    marginTop: "10px"
}

var cardTitleStyle = {
    background:"#3F51B5",
    color:"white"
}
var cardTextStyle= {
    textAlign: "left",
    paddingLeft: "18px"
}

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class CourseList extends Component{
    /**
    * constuctor of courseList
    */
    constructor (props) {
        super(props);
        this.state = { searchTerm: '' }
        this.saveACourse = this.saveACourse.bind(this)
    }

    /**
    * called before dom elements is mounted, fetch course
    */
    componentWillMount(){
        this.props.dispatch(fetchCourse());

    }

    /**
    * save a course
    * @param {object} courseName the name of the course
    */
    saveACourse(courseName){
        this.props.dispatch(saveACourse(courseName));
        window.location.assign("/#view-course-detail");
    }

    /**
    * converts json object to an array of its contents
    * @param {object} json   takes a json object
    * @return {Array} arr returns an array of the given json object
    */
    jsonToArray(json){
        var arr = [];
        for (var prop in json) {
            arr.push(json[prop]);
        }
        return arr
    }

    /**
    * Called dom elements is mounted, set focus on search bar
    */
    componentDidMount (){
        document.getElementById("courseSearchInput").focus()
    }

    /**
    * update search term after user imput
    * @param {string} term   pass a search term
    */
    searchUpdated (term) {
        term = document.getElementById("courseSearchInput").value
        this.setState({searchTerm: term})
    }

    /**
    * renders the display for the current page.   displays courses
    * @return {html} if there is a courselist return the list
    */


    render(){
        const {course}=this.props


        if (course.courseList){
            var arr = this.jsonToArray(course.courseList)
            const filteredCourses = arr.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
            const mappedCourse = filteredCourses.map(
                function(course){
                    var mappedTags = " "
                    if(course.courseTags){
                        var mappedTags = course.courseTags.map(tag => 
                            <Chip style={{marginRight:"3px"}} key={tag.text} >{tag.text}</Chip>
                        )
    
                    }
                return(
                    <div style={listItemStyle} key = {course.courseID} className="mdl-card mdl-shadow--2dp" onClick={()=>(this.saveACourse(course.courseName))}>
                        <div style={cardTitleStyle} className="mdl-card__title" >
                            <h2  className="mdl-card__title-text">
                                {course.courseName}
                            </h2>
                        </div>
                         <div style={cardTextStyle} className="mdl-card__supporting-text">
                            {course.courseDescription}
                        </div>
                        <div style={cardTextStyle} className="mdl-card__supporting-text">
                           {mappedTags}
                        </div>
                    </div>
                )},this)

            return(

                <div ref="courseList" style={{  overflow:"scroll",}}>
                    <div style={{background:"white",position: "relative",zIndex: "10"}} className="mdl-shadow--2dp" >
                        <Textfield autoFocus style={{display: "block",marginLeft:"20px",width:"96%",marginRight:"0px"}} className="search-input" id="courseSearchInput" onChange={this.searchUpdated.bind(this)} label="Search" />
                    </div>
                    <div style={listStyle}>
                        {mappedCourse}
                    </div>
                </div>
            )

        }else{
            return(
               <div style={{overflow:"scroll",}}>
                    <div style={{background:"white",position: "relative",zIndex: "10"}} className="mdl-shadow--2dp" >
                        <Textfield autoFocus style={{display: "block",marginLeft:"20px",width:"96%",marginRight:"0px"}} className="search-input" id="courseSearchInput" onChange={this.searchUpdated.bind(this)} label="Search" />
                    </div>
                    <div style={listStyle}>
                        loading
                    </div>
                </div>
            )
        }

    }
}



export default CourseList
