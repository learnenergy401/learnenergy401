 import React, { Component } from 'react'
import {Content, Layout,Button,List, ListItem,ListItemContent,Chip,Card,CardText,CardTitle,CardList,Textfield} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import SearchInput, {createFilter} from 'react-search-input'


import "../../extra/material.js"
import { fetchUsers } from "../Actions/userActions"

const KEYS_TO_FILTERS = ['website', 'legalEntity','email']



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
    constructor (props) {
        super(props);
        this.state = { searchTerm: '' }
    }

    componentWillMount(){
        this.props.dispatch(fetchUsers());

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

    componentDidMount (){
        document.getElementById("vendorSearchInput").focus()
    }


    searchUpdated (term) {
        term = document.getElementById("vendorSearchInput").value
        this.setState({searchTerm: term})
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
                            {vendor.email}
                        </div>
     
                    </div>
                ),this)

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
