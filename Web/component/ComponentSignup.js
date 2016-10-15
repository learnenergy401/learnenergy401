import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';


var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

class ComponentSignUp extends Component {

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
          <form style={formStyle} onSubmit={this.requestSubmit}>
            <CardText style={componentStyle}el> 
                <Textfield className="form-control" ref="email" placeholder="Email" id="email"/>
            </CardText>
            <CardText style={componentStyle}el> 
                <Textfield ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
            </CardText>
            <CardActions>
                <Button accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Register</Button>
            </CardActions>
          </form>
        </div>
      </div>
    );
  }
};

export default ComponentSignUp
    