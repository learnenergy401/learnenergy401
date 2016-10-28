import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class Admin extends Component {

    fetchRole() { // pass email to fetchRole for it to see role
        this.props.dispatch(fetchRole(email))
    }   

    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

    componentWillMount() {
        this.fetchUsers()
        //this.fetchRole(email) // email will be current user logged in email
    }

    approve() {
        console.log("approved")
    }

    reject() {
        console.log("rejected")
    }

    render() {
        const {user} = this.props
        console.log(user)
        console.log(user.user)
        var keys
        if (user.user != null) {
            keys = Object.keys(user.user)
            for (var count=0; count<=keys.length-1; count++) {      
                var key_name = keys[count]
                console.log(user.user[key_name].email)
            }
        }
        return(
        <div>
            Hello <input type = "text" placeholder = "Admin usename here"/>
            <h1>TODO</h1>
            <p><b>display users with check and X next to name </b></p>
            <p><b>display users with check and X next to name </b></p>
            <p><b>on check click, user is approved.</b></p>
            <p><b>on X click, user is refused.</b></p>
            {/*
                DISPLAY THE USERS INFORMATION HERE WITH CHECKBOXES 
            */}

            <Button accent ripple onClick={this.approve} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
            <Button accent ripple onClick={this.reject} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
        
        </div>
        
        );
    }
}


export default Admin;