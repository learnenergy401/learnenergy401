import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button,Chip} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import {findDOMNode, render} from 'react-dom'


import "../../extra/material.js"
import { fetchBookmarks, setBookmarks, fetchUsers } from "../Actions/userActions.js"
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
     * fetches users
     */
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    /**
     * fetches bookmarks
     */
    fetchBookmarks() {
        this.props.dispatch(fetchBookmarks())
    }
    /**
     * sets bookmarks
     * {params} bookmarks - information of bookmarks
     */    
    setBookmarks(bookmarks) {
        this.props.dispatch(setBookmarks(bookmarks))
    }
    /**
     * called before dom elements are mounted, to get current user
     */
    componentWillMount() {
        this.fetchBookmarks()
        this.fetchUsers()
    }
    /**
     * removes bookmarks
     * {params} bookmarks - information of bookmarks
     */   
    removeBookmark(key_name) {
        // grab information of bookmarks and remove the bookmark of the key_name
        var userID = user.userID
        var bookmarks = user.bookmarks.userID
        delete bookmarks.userID.key_name

        this.setBookmarks(bookmarks)
        location.reload()
    }

    /**
    * Loads the bookmarks profile
    * @return {html} - returns course profile depending on type of user
    */
    render(){
        const {user} = this.props

        if (user.bookmarks !=null && user.userID !=null && user.users!=null) {
            var bookmarks = []
            var userID = user.userID
            var bookmarkKeys = Object.keys(user.bookmarks.userID)
            var userKeys = Object.keys(user.users)
            for (var i=0; i<bookmarkKeys.length; i++) {
                for (var j=0; j<userKeys.length; j++) {
                    if (bookmarkKeys[i] == userKeys[j]) {
                        bookmarks.push(<h4>{user.users[userKeys[j]].email}</h4>)
                        bookmarks.push(<br/>)
                        bookmarks.push(<div>
                        <Button accent ripple onClick={this.removeBookmark.bind(this,userKeys[j])} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
                        </div>)
                        bookmarks.push(<br/>)
                    }
                }
            }

            
            return(
                <Content className="learn-content">
                    <div className="android-content mdl-layout__content">
                            <a name="top" />
                            <div style={{width: '80%', margin: 'auto'}}>

                                <CardText>{bookmarks}</CardText>

                            </div>
                        </div>

                </Content>

        )
        } else {
            return(
                <Content className="learn-content">
                    <div className="android-content mdl-layout__content">
                            <a name="top" />
                            <div style={{width: '80%', margin: 'auto'}}>

                                <CardText>No vendors bookmarked</CardText>

                            </div>
                        </div>

                </Content>

        )       
        }
    }
};


export default ContentBookmarks
