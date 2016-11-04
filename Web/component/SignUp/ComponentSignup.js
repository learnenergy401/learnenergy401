import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';

import { signUpUser } from "../Actions/userActions"
import { connect } from "react-redux"
import FirebaseTools from '../Firebase.js'
import ButtonSignUpPurchaser from './ButtonSignUpPurchaser.js'
import ButtonSignUpVendor from './ButtonSignUpVendor.js'
import ButtonSignUpAD from './ButtonSignUpAD.js'

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}


@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

class ComponentSignUp extends Component {

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>

          <CardActions>
            <ButtonSignUpPurchaser to='signup-purchaser' />
          </CardActions>

          <CardActions>
            <ButtonSignUpVendor to='signup-vendor' />
          </CardActions>

          <CardActions>
          <ButtonSignUpAD to='signup-ad' />
          </CardActions>

        </div>
      </div>
    );
  }
};

export default ComponentSignUp
