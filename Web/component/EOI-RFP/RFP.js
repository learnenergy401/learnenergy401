import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'

import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import { removeEOI, storeEOIkey, fetchEOIs } from "../Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class RFP extends Component {

	render() {

		return(
			<div></div>
		)
	}

}

export default RFP