import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'

// var firebase = require('firebase');
// var config = require('../../../firebase.config.js');
// firebase.initializeApp(config);

class Login extends Component {
  render(){
    return (
      <div>    
          <div className="learn-header mdl-layout__header">
            <LearnHeader/>
          </div>
          <div className="">
            <LoginMidDiv/>   
          </div>
          <LearnFooter/>
      </div>    
    );
  }
}



class LoginMidDiv extends Component {

    loginSubmit() {
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;
        var self  = this;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
            var location = self.props.location
            if (location.state && location.state.nextPathname) {
                self.context.router.replace(location.state.nextPathname)
            } else {
                self.context.router.replace('/home')
            }
            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        });
    }

    render() {
        return (
            <div>
            <h1> Login </h1>
            <form onSubmit={this.loginSubmit}>
                <label> Email </label>
                <input className="form-control" ref="email" placeholder="Email" id="email"/>
            
                <label>Password</label>
                <input ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
                {/* *todo* heres a variable called errors that is not defined. i have commented it*/}
                {/*errors*/}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }

};



export default Login