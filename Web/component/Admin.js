import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';

class Admin extends Component {
    render(){
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