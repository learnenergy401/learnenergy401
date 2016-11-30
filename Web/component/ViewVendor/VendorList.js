import React, { Component } from 'react'
import {Icons, Content, Layout,Button,List, ListItem,ListItemContent,Chip,Card,CardText,CardTitle,CardList,Textfield} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import SearchInput, {createFilter} from 'react-search-input'


import "../../extra/material.js"
import { fetchUsers, fetchBookmarks, setBookmarks, removeBookmark } from "../Actions/userActions"

const KEYS_TO_FILTERS = ['website', 'legalEntity','email', 'natureBusiness']



var listStyle = {

    overflow:"scroll"
}

var listItemStyle =  {
    width : "96%",
    height:"100px",
    margin: "10px"
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

class VendorList extends Component{
    /**
    * constructor of class VendorList
    */
    constructor (props) {
        super(props);
        this.state = { searchTerm: '' }
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
     * removes bookmarks
     * {params} bookmarks - information of bookmarks
     */
    removeBookmark(bookmarks) {
        this.props.dispatch(removeBookmark(bookmarks))
    }

    /**
    * called before dom elements is mounted, fetching user list
    */
    componentWillMount(){
        this.props.dispatch(fetchUsers())
        this.fetchBookmarks()

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
    * called after dom elements is mounted, set focus on search bar
    */
    componentDidMount (){
        document.getElementById("vendorSearchInput").focus()
    }

    /**
    * update search team after user input
    * @param {string} term   pass a search term
    */
    searchUpdated (term) {
        term = document.getElementById("vendorSearchInput").value
        this.setState({searchTerm: term})
    }

    /**
     * sets the bookmarks from the database.
     * @param {key} key - information on bookmarks
     */
    bookmark(key) {
        // update the bookmarks

        var bookmarks = {key}
        this.setBookmarks(bookmarks)
        this.fetchBookmarks()
        // location.reload()
    }
    /**
     * removes the bookmarks from the database.
     * @param {key} key - information on bookmarks
     */
    removebookmark(key) {
        var bookmarks = {key}
        this.removeBookmark(bookmarks)
        this.fetchBookmarks()
        // location.reload()

    }

    /**
    * renders the display for the current page.   displays courses
    * @return {html} if there is a courselist return the list
    */
    render(){
        const {user}=this.props

        if (user.users){
            var arr = this.jsonToArray(user.users)
            const arr = arr.filter(createFilter("1", "role"))
            console.log(arr)
            const filteredVendors = arr.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
            const mappedVendors = filteredVendors.map((vendor)=>(
                    <div style={listItemStyle} key={vendor.userID} className="mdl-card mdl-shadow--2dp" >
                       <div style={cardTitleStyle} className="mdl-card__title" >
                            <h2  className="mdl-card__title-text">
                                {vendor.legalEntity}
                            </h2>
                        </div>
                         <div style={cardTextStyle} className="mdl-card__supporting-text">
                            {vendor.phone}
                            <br/>
                            {vendor.email}
                            <br/>
                            {vendor.website}
                            <br/>
                            <hr/>
                            {vendor.natureBusiness}
                        </div>

                    </div>
                ),this)

            // display bookmark button if user is purchaser and logged in
            if (user.user) { // there is a user logged in
                if (user.user.role == 0) { // user is a purchaser

                    const mappedVendors = filteredVendors.map((vendor)=>(
                            <div style={listItemStyle} key={vendor.userID} className="mdl-card mdl-shadow--2dp" >
                               <div style={cardTitleStyle} className="mdl-card__title" >
                                    <h2  className="mdl-card__title-text">
                                        {vendor.legalEntity}
                                    </h2>
                                    <div className="mdl-layout-spacer" />
                                    <Button accent ripple onClick={this.bookmark.bind(this,vendor.userID)} className="mdl-button mdl-button--icon">
                                        <i className="material-icons">turned_in_not</i>
                                    </Button>
                                </div>
                                 <div style={cardTextStyle} className="mdl-card__supporting-text">
                                    {vendor.phone}
                                    <br/>
                                    {vendor.email}
                                    <br/>
                                    {vendor.website}
                                    <br/>
                                    <hr/>
                                    {vendor.natureBusiness}
                                </div>

                            </div>
                        ),this)


                    //console.log('mapped vendors is', mappedVendors)
                    var keys = Object.keys(mappedVendors)
                    //console.log('keys are', keys)

                    for (var i=0; i<keys.length; i++) {
                        console.log(mappedVendors[keys[i]].key)
                    }

                    console.log(user)
                    if (user.bookmarks) { // there are bookmarks for that user
                        var Vkeys = Object.keys(mappedVendors)
                        //console.log('vkeys is ', Vkeys)
                        var Bkeys = Object.keys(user.bookmarks)
                        //console.log('bkeys is', Bkeys)

                        for (var j=0; j<Bkeys.length; j++) {
                            for (var i=0; i<Vkeys.length; i++) {
                                // if they are matching, user has bookmarked this vendor. update icon
                                if (mappedVendors[Vkeys[i]].key == user.bookmarks[Bkeys[j]].key) {
                                    // change the div of this mappedVendors
                                    mappedVendors[Vkeys[i]] = (
                                    <div style={listItemStyle} key={mappedVendors[Vkeys[i]].key} className="mdl-card mdl-shadow--2dp" >
                                       <div style={cardTitleStyle} className="mdl-card__title" >
                                            <h2  className="mdl-card__title-text">
                                                {user.users[mappedVendors[Vkeys[i]].key].legalEntity}
                                            </h2>
                                            <div className="mdl-layout-spacer" />
                                            <Button accent ripple onClick={this.removebookmark.bind(this,Bkeys[j])} className="mdl-button mdl-button--icon">
                                                <i className="material-icons">turned_in</i>
                                            </Button>
                                        </div>
                                         <div style={cardTextStyle} className="mdl-card__supporting-text">
                                            {user.users[mappedVendors[Vkeys[i]].key].phone}
                                            <br/>
                                            {user.users[mappedVendors[Vkeys[i]].key].email}
                                            <br/>
                                            {user.users[mappedVendors[Vkeys[i]].key].website}
                                            <br/>
                                            <hr/>
                                            {user.users[mappedVendors[Vkeys[i]].key].natureBusiness}
                                        </div>

                                    </div>)
                                }
                            }
                        }
                    }

                return(

                <div ref="vendorList" style={{marginLeft:"20%",  height: "600px", overflow:"scroll",}}>
                    <Textfield style={{display: "block",margin:"10px",width:"96%"}} autoFocus  className="search-input" id="vendorSearchInput" onChange={this.searchUpdated.bind(this)} label="Search" />
                    <div style={listStyle}>
                        {mappedVendors}
                    </div>
                </div>
                )
                }
            }

            return(

                <div ref="vendorList" style={{marginLeft:"20%",  height: "600px", overflow:"scroll",}}>
                    <Textfield style={{display: "block",margin:"10px",width:"96%"}} autoFocus  className="search-input" id="vendorSearchInput" onChange={this.searchUpdated.bind(this)} label="Search" />
                    <div style={listStyle}>
                        {mappedVendors}
                    </div>
                </div>
            )

        }else{
            return(
               <div style={{marginLeft:"20%",  height: "600px", overflow:"scroll",}}>
                    <Textfield style={{display: "block",margin:"10px",width:"96%"}} autoFocus  className="search-input" id="vendorSearchInput" onChange={this.searchUpdated.bind(this)} label="Search" />
                    <div style={listStyle}>
                        loading
                    </div>
                </div>
            )
        }

    }
}



export default VendorList
