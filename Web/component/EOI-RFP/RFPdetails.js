import React, { Component } from 'react';
import { Header, Layout, Textfield,Grid,Cell,Card,CardText, Content, CardTitle, CardActions, Button } from 'react-mdl';

import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { fetchRFPs, getCurrentUser, fetchRFPkey, fetchUsers, updateRFP } from "../Actions/userActions"

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    height:'500px'
}

var cardTitleStyle = {
    height:'200px'
}

@connect((store) => {
  return {
    user: store.user
  };
})

// This class will be editable between purchasers and vendors
class RFPdetails extends Component {
    /**
     * Fetches currentuser
     * @returns {object} user - return user
     */
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }
    /**
     * Fetches Users
     * @returns {object} users - return users
     */
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    /**
     * Fetches RFPkey
     * @returns {object} RFPkey - return RFPkey
     */
    fetchRFPkey() {
        this.props.dispatch(fetchRFPkey())
    }
    /**
     * Fetches RFPs
     * @returns {object} RFP - return RFP
     */
    fetchRFPs() {
        this.props.dispatch(fetchRFPs())
    }
    /**
     * Updates RFPs
     * @params {object} info - updates RFP based off info
     */
    updateRFP(info) {
        this.props.dispatch(updateRFP(info))
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount(){
        this.getCurrentUser()
        this.fetchRFPs()
        this.fetchRFPkey()
        this.fetchUsers()
    }
    /**
     * Invoked to update our fields
     */
    componentDidUpdate() {
        const {user} = this.props
        if (!user.isLoggedIn) {
            return
        }
        // now auto fill the document user user.rfp[user.rfpKey].X
        // check to see if the user is a purchaser or vendor
        if (user.user.role == 1 || user.user.role == 0) {             
            // check to see that these are the valid users
            var valid_user = false
            var keys = Object.keys(user.users)
            for (var count=0; count<keys.length;count++) {

                // found valid user for this rfp
                if ((user.rfp.vendor == keys[count]) || (user.rfp.purchaser == keys[count])) {
                    valid_user = true
                    break
                }
            }

            // we have a valid user now 
            if (valid_user) {
                // fill out our form now
                document.getElementById("").value = user.rfp.


            }
        }
    }

    requestUpdate() {
        const {user} = this.props
        var info 



        this.updateRFP(info)
    }

    /**
     * Loads the details 
     * @return {html} - returns html details
     */
    render() {

        const {user} = this.props

        if((user.isLoggedIn) && ((user.user.role==1)||(user.user.role==0))) {





        } else {
            return ( 
            <div>
              <LearnHeader/>

              <div className="learn-content mdl-typography--text-center">
              <div className="logo-font learn-slogan"></div>
              <a name="top" />
              <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>

                <h4>YOU ARE NOT A VALID USER</h4>
              </div>
              </div>
              <LearnFooter/>
            </div>
            );
        }
    }

}


export default RFPdetails