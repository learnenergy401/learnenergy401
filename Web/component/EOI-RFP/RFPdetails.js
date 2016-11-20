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
import { fetchRFPs } from "../Actions/userActions"

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

    render() {


        return( 
            <div>hi</div>

            )
    }

}


export default RFPdetails