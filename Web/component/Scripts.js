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


/**
* @ignore
*/
class Scripts extends Component {
  /**
  * @ignore
  */
    script(){

          firebaseDb.ref('Notifications/cykehSsWUIfvWZykWq1mnOLEHu32').set({
            notified: false,
          })
          firebaseDb.ref('Keys_Roles/cykehSsWUIfvWZykWq1mnOLEHu32').set({
            // set with base values
            key: "test",
            role: 0,
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
