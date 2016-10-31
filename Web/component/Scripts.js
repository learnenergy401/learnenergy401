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
        firebaseDb.ref('User/-KVNpWcpJxoDa_REbOpZ').once("value")
            .then((snapshot) => {
                
                var temp = snapshot.val()
                temp.role = 1
                console.log(temp.role)
                firebaseDb.ref('User/D5WHbqLPSFXJVfItHJbOMw0Lf3c2').set(temp)
            })

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