import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from './Firebase.js'
import { logInUser, getCurrentUser } from "./Actions/userActions"
import { connect } from "react-redux";
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

@connect((store) => {
  return {
    user: store.user.user
  };
})/*dont add semicolon here!*/


class ComponentLogin extends Component {
    /**
     * State changes if a user is logging
     * @param {object} user - object returns the user state changed to logged in
     */
    logInUser(user) {
        this.props.dispatch(logInUser(user))
    }
    /**
     * Gets the current user
     * @return {object} user - Returns current user into state current user
     */
    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount() {
      this.getCurrentUser()
    }
    /**
     * takes in the user email and password and logs in the user
     */
    loginSubmit() {
        var email = document.getElementById("email").value
        var pw = document.getElementById("pw").value
        const user = {email, pw}
        this.logInUser(user)

    }
    /**
      * Loads the card with login in form.
      * @return {html} - returns buttons, email and password Textfield
      */
    render() {
        const {user} = this.props
        console.log("user is ",user)
        if (user == null) {
            return (
                <div className="android-content mdl-layout__content">
                    <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>

                        <br/><br/><br/>
                        <Textfield onChange={() => {}} floatingLabel style={{width:'300px'}} label="Email" id="email"/>
                        <br/>
                        <Textfield onChange={() => {}} floatingLabel style={{width:'300px'}} type="password" label="Password" id="pw"/>
                        <br/>
                        <Button raised ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.loginSubmit.bind(this)}>Login</Button>

                    </div>
                </div>
            );
        } else {
          return (
                <div className="android-content mdl-layout__content">
                    <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                    </div>
                </div>
            );

        }
    }

};

export default ComponentLogin
