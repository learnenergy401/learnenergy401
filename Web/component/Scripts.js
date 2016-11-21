import React, { Component } from 'react';
import {Button} from 'react-mdl';

import store from './Store.js'

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser,storeReqEOI } from "./Actions/userActions"

import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from './Firebase'


@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/


/**
* @ignore
*/
class Scripts extends Component {
  
  storeReqEOI(info) {
    this.props.dispatch(storeReqEOI(info))
  }
  /**
  * @ignore
  */
    script(){
      var vendor_uid = "gE88Fyh2a8Pbstvq1Yv3QgnoTYf1"
      var course_uid = "ggggg"
      var email = "purchasereoi@gmail.com"
      var info = {vendor_uid, course_uid, email}

      this.storeReqEOI(info)
    }
    /**
    * @ignore
    */
    render(){
        return(

                <div>
                <Button onClick = {this.script.bind(this)}>ggg</Button>
                </div>
            )
        }

};

export default Scripts
