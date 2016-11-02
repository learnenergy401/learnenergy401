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

    logInUser(user) {
        this.props.dispatch(logInUser(user))
    }

    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }

    componentWillMount() {
      this.getCurrentUser()
    }

    loginSubmit() {
        var email = document.getElementById("email").value
        var pw = document.getElementById("pw").value
        const user = {email, pw}
        this.logInUser(user)
        
    }

    render() {
        const {user} = this.props
        console.log("user is ",user)
        if (user == null) {
            return (
                <div className="android-content mdl-layout__content">
                    <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
                        <CardText style={componentStyle}>
                            <Textfield label="email" className="form-control" ref="email" placeholder="Email" id="email"/>
                            </CardText>
                        <CardText style={componentStyle}>        
                            <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="pw"/>
                        </CardText>
                            {/*errors*/}
                        <CardActions style={componentStyle}>
                            <Button onClick={this.loginSubmit.bind(this)} accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Login</Button>
                        </CardActions>
                    </div>
                </div>
            );
        } else {
            return (
                window.location.assign('/')
            );

        }
    }

};

export default ComponentLogin