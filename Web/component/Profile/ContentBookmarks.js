import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button,Chip} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import {findDOMNode, render} from 'react-dom'


import "../../extra/material.js"
import { fetchBookmarks, setBookmarks } from "../Actions/userActions.js"
import Toast from "../Toast.js"

var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}


@connect((store) => {
  return {
    user: store.user,
  };
})/*dont add semicolon here!*/


class ContentBookmarks extends Component {

    /**
     * fetches bookmarks
     */
    fetchBookmarks() {
        this.props.dispatch(fetchBookmarks())
    }
    /**
     * called before dom elements are mounted, to get current user
     */
    componentWillMount() {
        this.fetchBookmarks()
    }
    /**
    * Loads the bookmarks profile
    * @return {html} - returns course profile depending on type of user
    */

    render(){
        const {user} = this.props
        var bookmarks = user.bookmarks

        )
        return(
            <Content className="learn-content">
                <div className="android-content mdl-layout__content">
                        <a name="top" />
                        <div style={{width: '80%', margin: 'auto'}}>

                            <CardText>{bookmarks}</CardText>

                        </div>
                    </div>

            </Content>

    )}
};


export default ContentBookmarks
