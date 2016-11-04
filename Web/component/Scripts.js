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
    script(){



    }
    
    render(){ 
        return(

                <div>
                <Button onClick = {this.script.bind(this)}>ggg</Button>
                </div>
            )
        }
       
};

export default Scripts