import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import Header from '../Header.js'
import Footer from '../Footer.js'

var firebase = require('firebase');
var config = require('../../../firebase.config.js');
firebase.initializeApp(config);

class SignUp extends Component {
  render(){
    return (
      <div>    
          <div className="learn-header mdl-layout__header">
            <Header/>
          </div>
          <div className="">
            <SignUpMidDiv/>   
          </div>
          <Footer/>
      </div>    
    );
  }
}




// template for text field
class SignUpTextfield extends Component {
    propTypes:{
        text: React.PropTypes.string.isRequired,
    }
    render(){
        return(
            <Cell col={5}>
                <p>{this.props.text}</p>
                <Textfield
                    onChange={() => {}}
                    label="Text.."
                    style={{width: '200px'}}
                />
            </Cell>
        )  
    }
};

class SignUpMidDiv extends Component {

  requestSubmit() {
    // Add signup event
    console.log(email.value);
    console.log(password.value);
    firebase.database().ref('SignUpList').push({
      email: email.value,
      password: password.value
    });
  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
        {/*
            <Grid className="demo-grid-3">
                    <SignUpTextfield text = "First Name"/>
                    <SignUpTextfield text = "Last Name"/>
            </Grid>
            
            <Grid className="demo-grid-3">
                    <SignUpTextfield text = "Operation Name"/>
                    <SignUpTextfield text = "City"/>
            </Grid>
        
            <Grid className="demo-grid-3">
                    <SignUpTextfield text = "Address Line 1"/>
                    <SignUpTextfield text = "Provence"/>
            </Grid>
        
            <Grid className="demo-grid-3">
                    <SignUpTextfield text = "Address Line 2"/>
                    <SignUpTextfield text = "Postal Code"/>
            </Grid>
            */}
          <form onSubmit={this.requestSubmit}>
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email" id="email"/>
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
};


export default SignUp
    