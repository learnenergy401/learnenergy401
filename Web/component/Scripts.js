import React, { Component } from 'react';
import {Button} from 'react-mdl';

import store from './Store.js'

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"

import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from './Firebase'


@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/



class Scripts extends Component {
  /**
  * @ignore
  */
    script(){

      firebaseDb.ref('Key/KeyName').set({
        key: null,
        role: null
      })

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
