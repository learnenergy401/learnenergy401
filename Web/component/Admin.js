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
    
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

    componentWillMount() {
        this.fetchUsers()
    }

    render() {
        const {user} = this.props
        console.log(user.user)
        if (user.user != null) {
            var keys = Object.keys(user.user)
            for (var count=0; count<=keys.length-1; count++) {  
                
                var key_name = keys[count]
                console.log(user.user[key_name].email)
                //console.log(user.user.test.email)
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

            <h1>DONE</h1>
        </div>
        
        );
    }
}


export default Admin;