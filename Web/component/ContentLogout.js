import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from './Firebase.js'

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

class ComponentLogout extends Component {

  requestSubmit() {
    // Add signup event
    FirebaseTools.logoutUser();
  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
          <form style={formStyle} onSubmit={this.requestSubmit}>
            <CardActions>
                <Button accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Logout</Button>
            </CardActions>
          </form>
        </div>
      </div>
    );
  }
};

export default ComponentLogout